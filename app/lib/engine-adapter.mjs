// SiteForge SaaS — engine adapter. Bridges the SaaS app to the v5 forge
// pipeline (factory/pipeline/*) WITHOUT modifying shared engine files.
// Responsibilities: packet forging (via scripts/forge.mjs), staged generation
// with live SSE events, versioned output dirs, QC parsing (with an honest
// degraded mode when headless Chromium is unavailable), template try-ons.
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawn, spawnSync } from "node:child_process";
import { readFileSync, writeFileSync, mkdirSync, existsSync, cpSync, rmSync } from "node:fs";
import { insert, update, get, find, siteDirFor, SITES_DIR, TRY_DIR, PUBLISHED_DIR, audit } from "./store.mjs";
import { id, token, nowIso, kebab, readJsonFile, writeJsonFile, ensureDir } from "./util.mjs";

const APP_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const REPO_ROOT = path.resolve(APP_ROOT, "..");

// Engine modules (in-process for SSE fidelity; read-only usage)
import { onEmit } from "../../factory/lib/emit.mjs";
import { discover } from "../../factory/pipeline/01-discover.mjs";
import { scrape } from "../../factory/pipeline/02-scrape.mjs";
import { rescue } from "../../factory/pipeline/03-rescue.mjs";
import { design } from "../../factory/pipeline/04-design.mjs";
import { build } from "../../factory/pipeline/05-build-v7.mjs"; // v7: media engine + GBP deep + Remic architectures
import { mergeV7Assets } from "./media-engine.mjs";
import { runV7Checks } from "../../qc-audit/qc-v7-ext.mjs";
import { mergeEnrichment } from "../../asset-pipeline/firecrawl-gbp-merge.mjs";
import { buildVeoPrompt } from "../../asset-pipeline/veo-prompt.mjs";

export const HERO_FAMILIES = [
  { key: "cinematic-video-parallax", name: "Cinematic Parallax", blurb: "Full-bleed motion hero with an oversized editorial headline. Built for trades with dramatic before/after footage." },
  { key: "split-editorial-index", name: "Editorial Split", blurb: "Magazine two-column: photo essay left, indexed copy right. Reads like a feature piece about your business." },
  { key: "service-map-pins", name: "Service Atlas", blurb: "An interactive service-area map is the hero. Every pin is a neighborhood you own." },
  { key: "material-lab-swatch", name: "Material Lab", blurb: "Zoomable material and finish swatches up front. For businesses whose craft is tactile." },
  { key: "magazine-owner-letter", name: "Owner's Letter", blurb: "A signed letter from the owner as the opening move. Human, direct, disarming." },
  { key: "atlas-grid-reveal", name: "Atlas Grid", blurb: "A 12-cell grid of your real work that reveals on hover. Portfolio-forward." },
];
export const SECTION_TOGGLES = [
  { key: "before-after-slider", label: "Before / after proof" },
  { key: "service-map", label: "Service-area map" },
  { key: "material-swatch-lab", label: "Materials lab" },
  { key: "homeowner-configurator", label: "Quote configurator" },
  { key: "team-portrait", label: "Team / owner portrait" },
  { key: "journal-excerpt", label: "Journal excerpt" },
  { key: "process-timeline", label: "Process timeline" },
  { key: "project-storytelling", label: "Project stories" },
];
export const GOALS = ["calls", "quotes", "bookings", "ecommerce", "portfolio"];

export const SERVERLESS = process.env.SITEFORGE_SERVERLESS === "1" || Boolean(process.env.VERCEL);

// ---------- capability probe ----------
let chromiumOk = null;
export function chromiumAvailable() {
  if (chromiumOk != null) return chromiumOk;
  const r = spawnSync(process.execPath, ["-e", "import('playwright').then(p=>p.chromium.launch().then(b=>b.close()).then(()=>process.exit(0),()=>process.exit(1)))"], { cwd: REPO_ROOT, timeout: 30000 });
  chromiumOk = r.status === 0;
  return chromiumOk;
}

// ---------- packet forging (single source of truth: scripts/forge.mjs) ----------
let tmpForgeRoot = null;
function forgeRoot() {
  // Serverless filesystems are read-only except /tmp; forge writes packets/
  // beside itself, so run it from a /tmp copy there.
  if (!SERVERLESS) return REPO_ROOT;
  if (tmpForgeRoot) return tmpForgeRoot;
  const os = { tmpdir: () => "/tmp" };
  tmpForgeRoot = path.join(os.tmpdir(), "sf-forge-root");
  mkdirSync(path.join(tmpForgeRoot, "scripts"), { recursive: true });
  cpSync(path.join(REPO_ROOT, "scripts", "forge.mjs"), path.join(tmpForgeRoot, "scripts", "forge.mjs"));
  cpSync(path.join(REPO_ROOT, "generator-queue-v5.schema.json"), path.join(tmpForgeRoot, "generator-queue-v5.schema.json"));
  return tmpForgeRoot;
}

export function forgePacket({ prompt = null, intake = null, slug = null, hero = null, demo = false }) {
  const ROOT = forgeRoot();
  const args = [path.join(ROOT, "scripts", "forge.mjs"), "--dry-run", "--json"];
  let tmp = null;
  if (intake) {
    tmp = path.join(process.env.SITEFORGE_DATA_DIR || path.join(APP_ROOT, "data"), "tmp", `intake-${token(6)}.json`);
    writeJsonFile(tmp, intake);
    args.push("--from-intake", tmp);
  } else if (prompt) {
    args.push("--prompt", prompt);
  } else throw new Error("forgePacket needs a prompt or an intake");
  if (slug) args.push("--slug", slug);
  if (hero) args.push("--hero", hero);
  if (demo) args.push("--demo");
  const r = spawnSync(process.execPath, args, { cwd: ROOT, encoding: "utf8", timeout: 30000 });
  if (tmp) try { rmSync(tmp); } catch {}
  const out = r.stdout || "";
  const jsonStart = out.indexOf("{");
  if (r.status !== 0 || jsonStart === -1) {
    const msg = (r.stderr || out || "forge failed").trim().replace(/^✖ forge failed:\s*/, "");
    const e = new Error(msg); e.status = 422; throw e;
  }
  return JSON.parse(out.slice(jsonStart));
}

// ---------- discovery packet files (brand/assets/services/trust/seo/build-packet) ----------
export function writeDiscoveryPackets(projectDir, packet, assets) {
  ensureDir(projectDir);
  const src = packet.enrichment_sources ?? {};
  const val = (k) => src[k]?.value ?? null;
  const brand = {
    name: packet.business?.name ?? null,
    logo: assets.find((a) => a.kind === "logo" && a.approved)?.url ?? val("logo"),
    colors: val("branding")?.colors ?? val("colors") ?? [],
    fonts: val("branding")?.fonts ?? [],
    tone: packet.voice_persona?.tone ?? null,
    sources: Object.fromEntries(Object.entries(src).map(([k, v]) => [k, { source: v.source, confidence: v.confidence }])),
  };
  const assetsOut = {
    logo: brand.logo,
    photos: assets.filter((a) => a.kind === "photo" && a.approved).map((a) => ({ url: a.url, label: a.label })),
    videos: assets.filter((a) => a.kind === "video" && a.approved).map((a) => ({ url: a.url })),
    screenshots: assets.filter((a) => a.kind === "screenshot").map((a) => ({ url: a.url })),
  };
  const services = { services: packet.services ?? [], source: src.services?.source ?? "unknown", confidence: src.services?.confidence ?? null };
  const trust = {
    reviews: assets.filter((a) => a.kind === "review" && a.approved).map((a) => a.meta ?? { text: a.label }),
    years_in_biz: src.years?.value ?? null,
    citations: assets.filter((a) => a.kind === "citation").map((a) => a.url),
    policy: "No fabricated reviews. Only verifiable, sourced trust signals render.",
  };
  const seo = {
    current_site: packet.business?.current_website ?? null,
    gaps: packet.seo_gaps ?? ["schema", "og-image", "llms.txt", "sitemap"],
    target_schema: ["LocalBusiness", "Service", "FAQPage", "BreadcrumbList"],
    geo_aeo: { llms_txt: true, speakable: true, faq_blocks: true },
  };
  writeJsonFile(path.join(projectDir, "brand.json"), brand);
  writeJsonFile(path.join(projectDir, "assets.json"), assetsOut);
  writeJsonFile(path.join(projectDir, "services.json"), services);
  writeJsonFile(path.join(projectDir, "trust.json"), trust);
  writeJsonFile(path.join(projectDir, "seo.json"), seo);
  writeJsonFile(path.join(projectDir, "build-packet.json"), packet);
}

// ---------- jobs + SSE bus ----------
const jobBus = new Map(); // jobId -> { events: [], listeners: Set<fn>, done: bool }
let queue = Promise.resolve();

export function jobEvents(jobId) { return jobBus.get(jobId) ?? null; }
function emitJob(jobId, event) {
  const bus = jobBus.get(jobId);
  if (!bus) return;
  bus.events.push(event);
  for (const fn of bus.listeners) { try { fn(event); } catch {} }
}
export function subscribe(jobId, fn) {
  const bus = jobBus.get(jobId);
  if (!bus) return () => {};
  for (const e of bus.events) fn(e);
  bus.listeners.add(fn);
  return () => bus.listeners.delete(fn);
}

async function execute(jobId, work) {
  const bus = jobBus.get(jobId);
  update("jobs", jobId, { status: "running", started_at: nowIso() });
  onEmit((e) => emitJob(jobId, e)); // concurrency is 1, safe to rebind
  try {
    const result = await work();
    update("jobs", jobId, { status: "done", finished_at: nowIso(), result, events: bus?.events.slice(-60) ?? [] });
    emitJob(jobId, { stage: "job", phase: "done", payload: result, ts: Date.now() });
    return result;
  } catch (err) {
    update("jobs", jobId, { status: "failed", finished_at: nowIso(), error: err.message, events: bus?.events.slice(-60) ?? [] });
    emitJob(jobId, { stage: "job", phase: "failed", payload: { message: err.message }, ts: Date.now() });
    return null;
  } finally {
    onEmit(null);
    if (bus) bus.done = true;
    const cleanup = () => jobBus.delete(jobId);
    if (!SERVERLESS) setTimeout(cleanup, 10 * 60_000);
  }
}
function enqueue(jobId, work) {
  if (SERVERLESS) return execute(jobId, work); // synchronous per-request execution
  queue = queue.then(() => execute(jobId, work));
  return queue;
}
export function createJob(type, meta = {}) {
  const job = insert("jobs", { id: id("job"), type, status: "queued", ...meta });
  jobBus.set(job.id, { events: [], listeners: new Set(), done: false });
  return job;
}

// ---------- QC ----------
function runQc(siteDir, batchDir = null) {
  const script = path.join(REPO_ROOT, "qc-audit", "qc.mjs");
  const args = [script, "--site", siteDir];
  if (batchDir) args.push("--batch", batchDir);
  const r = spawnSync(process.execPath, args, { cwd: REPO_ROOT, encoding: "utf8", timeout: 120000 });
  const reportPath = path.join(siteDir, "qc-report.json");
  if (existsSync(reportPath)) {
    const results = JSON.parse(readFileSync(reportPath, "utf8"));
    const v7 = safeV7Checks(siteDir);
    const merged = results.filter((x) => !v7.some((n) => n.name === x.name)).concat(v7);
    return gradeResults(merged, r.status === 0 && v7.every((x) => x.pass), false);
  }
  // Headless browser unavailable → honest degraded QC (never silently pass)
  return qcLite(siteDir);
}
function safeV7Checks(siteDir) {
  try { return runV7Checks(siteDir); } catch (e) { return [{ name: "v7-ext", pass: false, detail: `v7 checks errored: ${e.message}` }]; }
}
function gradeResults(results, exitZero, degraded) {
  const failed = results.filter((x) => !x.pass);
  let grade = exitZero && failed.length === 0 ? "A" : failed.length <= 2 ? "B" : failed.length <= 4 ? "C" : "D";
  if (degraded && grade === "A") grade = "B";
  const score = Math.round(((results.length - failed.length) / Math.max(1, results.length)) * 100);
  return { grade, score, results, failed: failed.map((f) => ({ name: f.name, detail: f.detail })), degraded };
}
function qcLite(siteDir) {
  const html = readFileSync(path.join(siteDir, "index.html"), "utf8");
  const ban = readJsonFile(path.join(REPO_ROOT, "copy-voice", "ban-list.json"), []);
  const results = [];
  const heroMatch = html.match(/<section[^>]*class="[^"]*hero[^"]*"[\s\S]*?<\/section>/i) || [html.slice(0, 6000)];
  const layerCount = (heroMatch[0].match(/<video|<svg|<canvas|<img|gradient|class="[^"]*(grain|motif|veil|overlay|marquee|widget)/gi) || []).length;
  results.push({ name: "hero-layer-count", pass: layerCount >= 6, detail: `count≈${layerCount} (need ≥ 6)` });
  const hits = ban.filter((p) => new RegExp(`\\b${p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(html));
  results.push({ name: "copy-ban-list", pass: hits.length === 0, detail: hits.length ? `hits: ${hits.join(", ")}` : "clean" });
  const needLd = ["LocalBusiness", "Service", "FAQPage", "BreadcrumbList"].filter((k) => !html.includes(`"@type":"${k}"`) && !html.includes(`"@type": "${k}"`));
  results.push({ name: "json-ld", pass: needLd.length === 0, detail: needLd.length ? `missing: ${needLd.join(", ")}` : "all present" });
  results.push({ name: "reduced-motion", pass: /prefers-reduced-motion/i.test(html), detail: /prefers-reduced-motion/i.test(html) ? "present" : "missing" });
  results.push({ name: "enrichment-completeness", pass: existsSync(path.join(siteDir, "packet.json")), detail: "packet.json present" });
  results.push({ name: "overflow-320", pass: false, deferred: true, detail: "deferred — headless Chromium unavailable in this environment" });
  results.push({ name: "screenshots", pass: false, deferred: true, detail: "deferred — headless Chromium unavailable in this environment" });
  for (const r of safeV7Checks(siteDir)) results.push(r); // dependency-free, runs everywhere
  return gradeResults(results, false, true);
}

// ---------- generation ----------
export function startGeneration({ user, project, profile, assets, options }) {
  const version = get("site_projects", project.id)?.next_version ?? 1;
  update("site_projects", project.id, { next_version: version + 1, status: "generating" });

  const gen = insert("site_generations", {
    project_id: project.id, user_id: user.id, version,
    build_type: options.build_type || "single_page_cinematic",
    hero_family: options.hero_family || null,
    prompt: options.prompt || "", status: "running",
    sections_disabled: options.sections_disabled || [],
    demo: !options.paid_publish,
  });
  const job = createJob("generate", { user_id: user.id, project_id: project.id, generation_id: gen.id });

  const done = enqueue(job.id, async () => {
    const baseSlug = project.slug || kebab(profile.business_name);
    const slug = `${baseSlug}-v${version}`;
    const intake = {
      businessName: profile.business_name, industry: profile.industry, city: profile.city, state: profile.state,
      phone: profile.phone || undefined, ownerEmail: user.email,
      currentWebsite: profile.website || undefined,
      services: (profile.services || []).join(", ") || undefined,
    };
    let packet = forgePacket({ intake, slug, hero: options.hero_family, demo: !options.paid_publish });
    if (options.prompt) packet.prompt = options.prompt;
    packet.build_type = options.build_type === "premier_multi_page" ? "multi-page" : "landing";
    packet.toggles = { ...packet.toggles, map: options.sections_disabled?.includes("service-map") ? false : true, ai_chat: Boolean(options.ai_chat), video_prompt: Boolean(options.video_prompt) };
    if (profile.gbp_url) { packet.business.gbp_url = profile.gbp_url; packet.toggles.gbp = true; }

    // merge approved user assets with full provenance
    const approvedLogo = assets.find((a) => a.kind === "logo" && a.approved);
    if (approvedLogo) {
      packet.enrichment_sources.logo = { source: "user", confidence: 1, value: approvedLogo.url };
    }
    const photos = assets.filter((a) => a.kind === "photo" && a.approved);
    if (photos.length) packet.media = { catalog: photos.map((p) => ({ kind: "photo", url: p.url })) };
    const reviews = assets.filter((a) => a.kind === "review" && a.approved);
    if (reviews.length) packet.enrichment_sources.reviews = { source: reviews[0].source || "import", confidence: 0.9, value: reviews.map((r) => r.label).join(" | ") };
    // V7 media engine: uploads, GBP deep import (hours/reviews/latlng/rating), logo choice
    mergeV7Assets(packet, assets);

    const outDir = siteDirFor(project.id, version);
    mkdirSync(outDir, { recursive: true });

    const firecrawlKey = process.env.FIRECRAWL_API_KEY;
    if (packet.business.current_website && firecrawlKey && options.rediscover) {
      await discover(packet, { firecrawlKey, gbpEnabled: !!packet.toggles.gbp, serpEnabled: false });
      await scrape(packet, { firecrawlKey });
    }
    await rescue(packet, { lovableKey: process.env.LOVABLE_API_KEY, outDir });
    mergeEnrichment(packet);
    design(packet);
    if (options.hero_family) packet.hero_family = options.hero_family; // user pin wins over rotation
    if (options.sections_disabled?.length) {
      packet.section_plan = packet.section_plan.filter((s) => !options.sections_disabled.includes(s));
    }
    if (packet.toggles.video_prompt) packet.veo_prompt = buildVeoPrompt(packet);

    let captureError = null;
    try {
      await build(packet, { outDir });
    } catch (err) {
      if (!existsSync(path.join(outDir, "index.html"))) throw err;
      captureError = err.message; // site rendered; screenshot capture failed (no chromium)
    }
    const qc = runQc(outDir);
    if (captureError && !qc.degraded) qc.failed.push({ name: "screenshots", detail: captureError });

    insert("site_qc_reports", {
      generation_id: gen.id, project_id: project.id, grade: qc.grade, score: qc.score,
      results: qc.results, degraded: Boolean(qc.degraded),
    });
    update("site_generations", gen.id, { status: "done", qc_grade: qc.grade, site_dir: outDir, hero_family: packet.hero_family, finished_at: nowIso() });
    update("site_projects", project.id, { status: "preview_ready", last_grade: qc.grade, hero_family: packet.hero_family });
    writeDiscoveryPackets(path.join(SITES_DIR, project.id, "discovery"), packet, assets);
    if (SERVERLESS) {
      const { blobUploadDir, BLOB_ENABLED } = await import("./blob-store.mjs");
      if (BLOB_ENABLED()) { await blobUploadDir(outDir, `sites/${project.id}/v${version}`); update("site_generations", gen.id, { blob_prefix: `sites/${project.id}/v${version}` }); }
    }
    audit(user.id, "generation.done", gen.id, { grade: qc.grade, version });
    return { generation_id: gen.id, version, grade: qc.grade, preview: `/preview/${project.id}/${version}/` };
  });
  return { job, gen, done };
}

// ---------- template try-on (public, rate-limited upstream) ----------
export function startTryOn({ family, name, city, state, category }) {
  const tok = token(10);
  const slug = `try-${kebab(name)}-${tok.slice(0, 6).toLowerCase()}`.replace(/[^a-z0-9-]/g, "");
  const job = createJob("try", { family, name });
  const done = enqueue(job.id, async () => {
    const prompt = `Site for ${name} in ${city}, ${state}. A ${category} business. Warm, plainspoken, professional.`;
    const packet = forgePacket({ prompt, slug, hero: family, demo: true });
    packet.section_plan = null; // let design plan sections
    const outDir = path.join(TRY_DIR, tok);
    mkdirSync(outDir, { recursive: true });
    await rescue(packet, { lovableKey: null, outDir });
    mergeEnrichment(packet);
    design(packet);
    // "auto" (or empty) keeps the seeded family from design() — every run gets
    // fresh layout DNA. An explicit family (user template pick) still wins.
    if (family && family !== "auto") packet.hero_family = family;
    try { await build(packet, { outDir }); } catch (err) { if (!existsSync(path.join(outDir, "index.html"))) throw err; }
    // demo guard: noindex + banner marker
    const idx = path.join(outDir, "index.html");
    let html = readFileSync(idx, "utf8");
    if (!/name="robots"/.test(html)) html = html.replace(/<head([^>]*)>/i, `<head$1>\n  <meta name="robots" content="noindex, nofollow" />`);
    writeFileSync(idx, html);
    if (SERVERLESS) {
      const { blobUploadDir, BLOB_ENABLED } = await import("./blob-store.mjs");
      if (BLOB_ENABLED()) await blobUploadDir(outDir, `try/${tok}`);
    }
    return { token: tok, preview: `/try/${tok}/`, family };
  });
  return { job, token: tok, done };
}

// ---------- publish ----------
export async function publishLocally(project, generation) {
  const dest = path.join(PUBLISHED_DIR, project.slug);
  rmSync(dest, { recursive: true, force: true });
  cpSync(generation.site_dir, dest, { recursive: true });
  if (SERVERLESS) {
    const { blobUploadDir, BLOB_ENABLED } = await import("./blob-store.mjs");
    if (BLOB_ENABLED()) await blobUploadDir(dest, `published/${project.slug}`);
  }
  return { url: `/sites/${project.slug}/`, dir: dest };
}
export async function publishToVercel(project, generation) {
  // VERCEL_* names are reserved on Vercel itself; SITEFORGE_VERCEL_* works everywhere.
  const vtoken = process.env.SITEFORGE_VERCEL_TOKEN || process.env.VERCEL_TOKEN;
  const teamId = process.env.SITEFORGE_VERCEL_TEAM_ID || process.env.VERCEL_TEAM_ID;
  if (!vtoken || !teamId) return { skipped: true, reason: "VERCEL_TOKEN / VERCEL_TEAM_ID not configured" };
  const dir = generation.site_dir;
  const { readdirSync, statSync } = await import("node:fs");
  const files = [];
  const walk = (d, base = "") => {
    for (const name of readdirSync(d)) {
      if (name === "packet.json" || name === "qc-report.json" || name === "qc-report.html" || name === "veo_prompt.json") continue;
      const fp = path.join(d, name);
      const rel = base ? `${base}/${name}` : name;
      const st = statSync(fp);
      if (st.isDirectory()) walk(fp, rel);
      else if (st.size < 4 * 1024 * 1024) files.push({ file: rel, data: readFileSync(fp).toString("base64"), encoding: "base64" });
    }
  };
  walk(dir);
  const r = await fetch(`https://api.vercel.com/v13/deployments?teamId=${teamId}`, {
    method: "POST", headers: { Authorization: `Bearer ${vtoken}`, "Content-Type": "application/json" },
    body: JSON.stringify({ name: `siteforge-${project.slug}`.slice(0, 52), files, projectSettings: { framework: null }, target: "production" }),
  });
  const data = await r.json();
  if (!r.ok) return { skipped: true, reason: data.error?.message || `Vercel ${r.status}` };
  // Customer sites must be public: clear team-inherited deployment protection.
  await fetch(`https://api.vercel.com/v9/projects/${`siteforge-${project.slug}`.slice(0, 52)}?teamId=${teamId}`, {
    method: "PATCH", headers: { Authorization: `Bearer ${vtoken}`, "Content-Type": "application/json" },
    body: JSON.stringify({ ssoProtection: null }),
  }).catch(() => {});
  return { skipped: false, url: `https://${data.url}`, deployment_id: data.id };
}
