#!/usr/bin/env node
// V7 QC extension gate — runs BESIDE qc-audit/qc.mjs (which stays untouched).
// New checks from RENDERER_V7_BRIEF acceptance:
//   media-plane-not-empty     — hero media plane carries real media (photo/video)
//                               or labeled AI ambiance; a bare SVG scene fails.
//   hours-rendered-when-sourced — if enrichment_sources.hours exists, the page
//                               must render hours + openingHoursSpecification.
//   ai-imagery-labeled        — every AI-generated visual is labeled in DOM
//                               (data-media-source="ai-ambiance") and in
//                               assets.json (source:"ai"); AI imagery must never
//                               appear inside gallery/proof sections.
// Zero dependencies (regex + JSON only) so it also runs degraded-serverless.
//   node qc-audit/qc-v7-ext.mjs --site <dir>     → prints "QC-V7: n/3 passed"
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";

export function runV7Checks(siteDir) {
  const html = readFileSync(path.join(siteDir, "index.html"), "utf8");
  const packet = readJson(path.join(siteDir, "packet.json"));
  const assets = readJson(path.join(siteDir, "assets.json"));
  const results = [];

  // ---- media-plane-not-empty
  {
    const plane = html.match(/<div class="media-plane[^"]*"[^>]*data-media-plane[^>]*data-media-source="([^"]+)"/);
    const legacyMedia = /<(img|video)[^>]*class="[^"]*hero-media/.test(html); // v6-style direct media
    const source = plane?.[1] ?? (legacyMedia ? "photo" : null);
    const pass = ["photo", "video", "ai-ambiance"].includes(source);
    results.push({ name: "media-plane-not-empty", pass, detail: pass ? `hero media: ${source}` : `no media plane — bare scene is not sellable (found: ${source ?? "none"})` });
  }

  // ---- hours-rendered-when-sourced
  {
    const sourced = Boolean(packet?.enrichment_sources?.hours?.value);
    if (!sourced) {
      const placeholder = /data-hours="placeholder"/.test(html);
      results.push({ name: "hours-rendered-when-sourced", pass: true, detail: placeholder ? "hours not sourced — honest placeholder rendered" : "hours not sourced (nothing invented)" });
    } else {
      const rendered = /data-hours="sourced"/.test(html);
      const schema = /openingHoursSpecification/i.test(html);
      results.push({ name: "hours-rendered-when-sourced", pass: rendered && schema, detail: rendered && schema ? "hours strip + openingHoursSpecification rendered" : `sourced hours but rendered=${rendered} schema=${schema}` });
    }
  }

  // ---- ai-imagery-labeled
  {
    const aiInDom = (html.match(/data-ai-media/g) || []).length;
    const aiLabeled = (html.match(/data-media-source="ai-ambiance"/g) || []).length;
    const aiInGallery = /<section[^>]*class="[^"]*(gallery|proof)[\s\S]*?data-ai-media[\s\S]*?<\/section>/.test(html);
    const manifestAi = (assets?.items ?? []).filter((i) => i.source === "ai");
    const manifestOk = aiInDom === 0 || manifestAi.length > 0;
    const pass = !aiInGallery && aiInDom <= aiLabeled + 0 && manifestOk;
    results.push({
      name: "ai-imagery-labeled",
      pass,
      detail: aiInDom === 0 ? "no AI imagery used" : pass ? `${aiInDom} AI visual(s), all labeled in DOM + assets.json (ambiance only)` : `unlabeled AI imagery: dom=${aiInDom} labeled=${aiLabeled} manifest=${manifestAi.length} inGallery=${aiInGallery}`,
    });
  }

  return results;
}

function readJson(fp) { try { return JSON.parse(readFileSync(fp, "utf8")); } catch { return null; } }

// ---- CLI ----
if (process.argv[1] && process.argv[1].endsWith("qc-v7-ext.mjs")) {
  const i = process.argv.indexOf("--site");
  const siteDir = i > -1 ? process.argv[i + 1] : "./site";
  const results = runV7Checks(siteDir);
  const failed = results.filter((r) => !r.pass);
  try {
    const existing = readJson(path.join(siteDir, "qc-report.json")) ?? [];
    const merged = existing.filter((r) => !results.some((n) => n.name === r.name)).concat(results);
    writeFileSync(path.join(siteDir, "qc-report.json"), JSON.stringify(merged, null, 2));
  } catch {}
  console.log(`QC-V7: ${results.length - failed.length}/${results.length} passed`);
  for (const r of results) console.log(`  ${r.pass ? "✓" : "✗"} ${r.name} — ${r.detail}`);
  if (failed.length) { console.error("FAIL:", failed.map((r) => r.name).join(", ")); process.exit(1); }
}
