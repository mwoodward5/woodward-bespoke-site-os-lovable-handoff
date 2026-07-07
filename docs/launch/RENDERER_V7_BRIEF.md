# Renderer V7 + Advanced Intake — build brief
Owner: Mark · Quality bar: https://vivid-vertex-builder.lovable.app/ · Formulas:
`docs/templates/SINGLE-PAGE CINEMATIC Remic.txt` + `docs/templates/PREMIER MULTI-PAGE Remic.txt`
Read `docs/launch/ENGINE_VISUAL_STANDARDS.md` first — its rules stay law.

## Verdict driving this brief (Mark, 2026-07-07)
v6 fixed trade-blindness but the preview still reads half-built: empty abstract
media pane, no logo pipeline, no photos, thin sections. Previews must look
finished enough to sell on sight, personalized in seconds.

## Ship list (priority order)

**1. Media engine — no more empty panes.**
- Logo: upload in Import tab (multipart POST `/api/projects/:id/assets/upload`,
  store under project blob prefix) → remaster (bg-removal via Lovable AI
  Gateway, already stubbed in `asset-pipeline/logo-remaster.mjs`). No logo? →
  AI-generate 3 mark candidates (image model; prompt = trade + palette + name),
  operator/user picks one; carries `proposed:true` provenance per spec §5.
- Photos: user upload (same endpoint) + Firecrawl-scraped site photos +
  AI-generated ambiance imagery per trade (pool water texture, cedar grain,
  slate roofline). POLICY: AI images are ambiance/texture ONLY, labeled
  `source:"ai"` in assets.json — never presented as the customer's real jobs,
  never people, never fake before/afters. Real packet photos always outrank AI.
- Hero media plane: photo (real > AI ambiance) with art-direction treatment
  (duotone to palette, blob/geometry mask from seed) — the current bare SVG
  scene becomes the layer UNDER media, never the whole pane.

**2. GBP deep import (Firecrawl on the GBP/Maps URL).**
Extract: hours (render + `openingHoursSpecification` JSON-LD), review snippets
with attribution (sourced, never invented), photo URLs, exact address + lat/lng.
Map block upgrade: real map imagery — MapLibre GL + Esri World Imagery
(satellite) tiles centered on lat/lng, pin + "Get directions" deep link
(`https://maps.google.com/?daddr=...`). Fallback to current SVG ring map when
no address is confirmed.

**3. Remic formula integration (the uploaded templates).**
Parse both Remic files into section specs: the single-page cinematic scroll
order and the premier multi-page architecture (pages, per-page heads,
BreadcrumbList, cross-nav). `build_type` finally maps to genuinely different
outputs. Target: section richness of vivid-vertex-builder — dense hero, proof
strip, service detail blocks with imagery, sticky CTA, footer with hours + map.

**4. Optimization surface visible to the buyer.**
The preview page should SHOW the optimization: schema badges, Lighthouse-style
score card, "what we fixed from your old site" (seo.json gaps → checkmarks).
Selling the invisible work is the demo.

**5. Intake upgrades in the wizard/Import tab.**
Upload dropzone (logo, photos), GBP URL field promoted (it exists), "generate
logo/photos with AI" toggles (cost-gated per COST_GUIDE), per-asset source
chips (site / GBP / upload / AI).

## Acceptance
- Forge "Woodward Pool Builders, Mission Viejo, CA, pool service" with ONLY
  name/city/trade: result must look sellable — logo candidate, ambiance media,
  full sections, map, hours placeholder — zero empty panes.
- With a GBP URL: hours, reviews, real photos, satellite map render sourced.
- QC 11/11 incl. batch uniqueness; new checks: `media-plane-not-empty`,
  `hours-rendered-when-sourced`, `ai-imagery-labeled`.
- Verify commands in ENGINE_VISUAL_STANDARDS.md, then redeploy both targets.
