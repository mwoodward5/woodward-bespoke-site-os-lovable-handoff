// SiteForge SaaS — V7 UI partials: Import-tab media engine (dropzones, GBP
// deep import, AI logo candidates, source chips) and the Preview-tab
// optimization scorecard. New file; pages-app.mjs composes these.
import { esc } from "../lib/util.mjs";

export const SOURCE_CHIPS = { firecrawl: "site", site: "site", gbp: "GBP", "gbp-deep": "GBP", upload: "upload", user: "upload", ai: "AI", manual: "manual", fixture: "demo", "no-website": "manual" };
export function sourceChip(source) {
  const label = SOURCE_CHIPS[source] || source || "found";
  const cls = { site: "chip", GBP: "chip ok", upload: "chip warn", AI: "chip ai" }[label] || "chip";
  return `<span class="${cls} src" style="font-size:.68rem;padding:.1rem .5rem">${esc(label)}</span>`;
}

// ---------------- Import tab: upload dropzones + AI toggles ----------------
export function mediaEnginePanel({ project, profile, csrf }) {
  const gbpDone = project.gbp_import;
  return `
  <div class="panel" style="margin-top:1.4rem"><h3>Media engine</h3>
    <div class="grid-2" style="align-items:start">
      <div>
        <p style="font-size:.9rem;margin-top:0">Drop your <b>logo</b> and <b>real job photos</b> here. Real media always outranks anything generated.</p>
        <form method="post" action="/api/projects/${project.id}/assets/upload" enctype="multipart/form-data" data-upload-form>
          <input type="hidden" name="_csrf" value="${esc(csrf)}">
          <label class="dropzone" data-dropzone="logo">
            <input type="file" name="logo" accept="image/png,image/jpeg,image/webp,image/svg+xml" hidden>
            <b>Logo</b><span>drag & drop or click — PNG / JPG / SVG, 8MB max</span>
          </label>
          <label class="dropzone" data-dropzone="photos">
            <input type="file" name="photos" accept="image/png,image/jpeg,image/webp" multiple hidden>
            <b>Job photos</b><span>drag several at once — they render as sourced proof, never altered</span>
          </label>
          <button class="btn sm" type="submit" data-upload-btn>Upload selected</button>
          <span class="muted" data-upload-status style="font-size:.84rem;margin-left:.6rem"></span>
        </form>
      </div>
      <div>
        <h4 style="margin:.2rem 0 .5rem;font-size:.95rem">No logo? Generate candidates</h4>
        <p style="font-size:.86rem;margin-top:0">Three proposed marks from your trade + palette. Every candidate carries <code>proposed:true</code> — nothing ships without your pick.</p>
        <form method="post" action="/api/projects/${project.id}/logo-candidates">
          <input type="hidden" name="_csrf" value="${esc(csrf)}">
          <button class="btn sm ghost" type="submit">✦ Generate 3 logo candidates</button>
        </form>
        <h4 style="margin:1.1rem 0 .5rem;font-size:.95rem">AI ambiance imagery</h4>
        <label style="display:flex;gap:.5rem;align-items:flex-start;font-size:.86rem;text-transform:none;letter-spacing:0">
          <input type="checkbox" checked disabled style="accent-color:var(--ember);margin-top:.2rem">
          <span>Trade-true ambiance textures fill the hero when no real photo exists. Always labeled <code>source:"ai"</code> — never fake job photos, never people, never before/afters. Real uploads replace them instantly.</span>
        </label>
      </div>
    </div>
  </div>
  <div class="panel" style="margin-top:1.2rem"><h3>Google Business Profile deep import</h3>
    <div class="grid-2" style="align-items:end">
      <form method="post" action="/api/projects/${project.id}/gbp-import">
        <input type="hidden" name="_csrf" value="${esc(csrf)}">
        <div class="field"><label>GBP / Google Maps URL</label>
          <input name="gbp_url" type="url" maxlength="400" value="${esc(profile.gbp_url || "")}" placeholder="https://maps.google.com/… or share link">
          <p class="hint">Pulls hours, attributed review snippets, photos, and your exact map pin (lat/lng) — everything sourced, nothing invented.</p></div>
        <button class="btn ember sm" type="submit">Import from Google</button>
      </form>
      <div style="font-size:.88rem">
        ${gbpDone ? `<div class="notice ok" style="margin:0"><b>Imported ${new Date(gbpDone.ran_at).toLocaleDateString()}:</b>
          ${gbpDone.hours ? "hours ✓" : "hours –"} · ${gbpDone.reviews} reviews · ${gbpDone.photos} photos ·
          ${gbpDone.latlng ? `pin ${Number(gbpDone.latlng.lat).toFixed(3)}, ${Number(gbpDone.latlng.lng).toFixed(3)} ✓ (satellite map unlocked)` : "no pin yet"}
          ${gbpDone.rating ? ` · ${gbpDone.rating.value}★ (${gbpDone.rating.count})` : ""}</div>`
        : `<p class="muted" style="margin:0">Once imported, the forge renders sourced hours (+schema), a satellite map with directions, and review proof with attribution.</p>`}
      </div>
    </div>
  </div>
  <style>
    .dropzone{display:flex;flex-direction:column;gap:.15rem;border:2px dashed var(--line);border-radius:12px;padding:1rem 1.1rem;margin:0 0 .7rem;cursor:pointer;transition:border-color .15s,background .15s}
    .dropzone:hover,.dropzone.drag{border-color:var(--ember);background:color-mix(in srgb,var(--ember) 6%,transparent)}
    .dropzone b{font-size:.95rem}.dropzone span{font-size:.8rem;color:var(--ink-2)}
    .dropzone.has-file{border-style:solid;border-color:var(--ember)}
    .chip.ai{border-color:#8b5cf6;color:#8b5cf6}
  </style>`;
}

// ---------------- logo candidate picker (shows in Import asset grid) ----------------
export function logoCandidateBar(assets, project, csrf) {
  const candidates = assets.filter((a) => a.kind === "logo" && a.origin === "ai-candidate" && !a.stale);
  if (!candidates.length) return "";
  return `<div class="panel" style="margin-top:1.2rem"><h3>Pick a proposed mark</h3>
    <p style="font-size:.88rem;margin-top:0">Generated candidates (<code>proposed:true</code>). Pick one to use it in the next forge — or upload your real logo, which always wins.</p>
    <div class="asset-grid" style="grid-template-columns:repeat(auto-fill,minmax(180px,1fr))">
      ${candidates.map((c) => `<div class="asset ${c.approved ? "" : "off"}" style="text-align:center">
        <span class="kind">candidate ${sourceChip("ai")}</span>
        <img src="${esc(c.url)}" alt="${esc(c.label)}" style="max-height:84px;object-fit:contain;background:#fff;border-radius:8px;padding:.4rem">
        <span style="font-size:.8rem">${esc(c.label)}</span>
        <button class="btn sm ${c.approved ? "ember" : "ghost"}" data-pick-logo="${c.id}" type="button">${c.approved ? "✓ Selected" : "Use this mark"}</button>
      </div>`).join("")}
    </div></div>`;
}

// ---------------- Preview tab: optimization scorecard ----------------
export function scorecardPanel(scorecard, seo) {
  if (!scorecard) return "";
  const s = scorecard;
  const badge = (t) => `<span class="chip ok" style="font-size:.7rem;padding:.14rem .55rem">${esc(t)}</span>`;
  const gaps = (s.fixed_from_old_site || []).length ? s.fixed_from_old_site : (seo?.gaps || []).map((g) => ({ gap: g, fix: "Addressed in forge output" }));
  return `<div class="panel" style="margin-top:1rem"><h3>Optimization scorecard <span class="grade ${s.score >= 90 ? "A" : s.score >= 75 ? "B" : "C"}" style="float:right">${s.score}</span></h3>
    <p class="muted" style="font-size:.82rem;margin:.2rem 0 .8rem">${esc(s.build_type === "multi-page" ? `Premier multi-page · ${s.pages?.length || 0} pages` : "Single-page cinematic")} · renderer v7</p>
    <div style="display:flex;gap:.35rem;flex-wrap:wrap;margin-bottom:.9rem">${(s.schema_types || []).map(badge).join("")}</div>
    <ul class="qc-list" style="font-size:.84rem">
      ${(s.checks || []).map((c) => `<li class="${c.pass ? "pass" : "fail"}"><span class="mark">${c.pass ? "✓" : "✗"}</span><span class="name">${esc(c.label)}</span><span class="detail">${esc(c.detail || "")}</span></li>`).join("")}
    </ul>
    ${gaps.length ? `<h4 style="margin:1rem 0 .4rem;font-size:.9rem">What we fixed from the old site</h4>
    <ul class="qc-list" style="font-size:.84rem">${gaps.map((g) => `<li class="pass"><span class="mark">✓</span><span class="detail"><b>${esc(g.gap)}</b> → ${esc(g.fix)}</span></li>`).join("")}</ul>` : ""}
    ${s.media ? `<p class="muted" style="font-size:.78rem;margin-top:.8rem">Hero media: <b>${esc(s.media.hero_source)}</b> · ${s.media.real_photos} real photo(s) · ${esc(s.media.policy)}</p>` : ""}
  </div>`;
}
