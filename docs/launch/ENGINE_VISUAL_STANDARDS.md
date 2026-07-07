# SiteForge Engine Visual Standards (v7) — the law for any agent touching the renderer

Paste this whole file to Codex (or any agent) before it touches generation code.
The active renderer is `factory/pipeline/05-build-v7.mjs` (media engine + GBP deep
import + Remic architectures; v6 tables carried forward). `05-build-v6.mjs` and the
old `05-build.mjs` are retired for SiteForge builds — do not "fix" them, do not
switch imports back. V7 additions: layered hero media plane (real photo > labeled
AI ambiance texture > never empty), sourced hours + openingHoursSpecification,
attributed GBP review snippets, MapLibre+Esri satellite map w/ directions (SVG ring
fallback), true `premier_multi_page` output (5–8 pages, per-page heads,
BreadcrumbList, cross-nav), scorecard.json + assets.json per build. AI imagery is
ambiance/texture ONLY, labeled `source:"ai"` — never fake job photos, never people.

## Why v5 output looked generic (never reintroduce these)
1. **Hardcoded landscaping fallback services** rendered on every trade ("Sharper
   yards" on roofing sites). v6: services come from the packet, else the
   trade table. NEVER a static list.
2. **Stock Unsplash hero fallback.** Banned outright. v6 falls back to an
   abstract per-trade SVG scene. Real photos come only from the packet.
3. **One dark palette for every business.** v6: palette = trade hue table ×
   family light/dark temperament. Roofing ≠ plumbing ≠ painting.
4. **Trade-blind headlines.** v6: hooks per trade with {city}/{noun} slots.
   Rule: the H1 or kicker MUST contain the trade noun.
5. **Hardcoded `noindex` on every build.** Only demo builds (`forge.demo`) get it.

## Hard rules (QC-enforced; a build that violates them must fail, not ship)
- Hero ≥ 6 counted layers inside `<section class="hero">`: media plane, veil,
  grain, motif overlay, widget, marquee/ledger — plus kinetic headline.
- Header logo `<img data-role="logo">` at 72–80px (monogram = data-URI img).
- No banned phrases (`copy-voice/ban-list.json`). No invented facts: stats
  render only from `enrichment_sources`; missing facts ⇒ omit the block.
- JSON-LD: LocalBusiness, Service, FAQPage, BreadcrumbList + speakable.
- 320px zero horizontal scroll (`html,body{overflow-x:clip}` + wrap flex rows).
- `prefers-reduced-motion` disables all animation.
- Batch anti-template gate: layout signatures must stay unique (`qc-audit`,
  hamming > 4). If two builds collide, widen seed divergence — never accept.
- All variation is DETERMINISTIC from `seedFrom(slug, trade)`. No Math.random.

## Extension points (safe to grow, in this order)
1. Add trades to the `TRADES` + `PALETTES` tables (copy hooks must be written
   like a human, no "look no further" sludge).
2. Add TYPE_PAIRS (distinct display+body; never default Inter/Poppins+purple).
3. Add hero families: new geometry in `HERO` + a widget — not a color swap.
4. Real media pipeline: Veo hero video / packet photos always outrank the SVG scene.
5. Multi-page: same tables, per-page heads + BreadcrumbList (Codex P1).

## Verify before calling anything done
```
node app/scripts/seed-demos.mjs                     # reforge all 6 demos
node qc-audit/qc.mjs --site app/data/demo-sites/demo-atlas-grid-reveal --batch app/data/demo-sites
# must print: QC: 11/11 passed  (grep the report for FAIL otherwise)
node qc-audit/qc-v7-ext.mjs --site <site-dir>       # must print: QC-V7: 3/3 passed
# (media-plane-not-empty · hours-rendered-when-sourced · ai-imagery-labeled)
node app/scripts/deploy-vercel.mjs --prod && node app/scripts/deploy-app.mjs
```
Current state (2026-07-07): **v7 live on both deployments.** QC 11/11 incl. batch
uniqueness on all six reforged demos + QC-V7 3/3. Acceptance forge ("Woodward Pool
Builders, Mission Viejo, CA, pool service" from name/city/trade only) renders
sellable with zero empty panes: labeled pool-water ambiance hero, monogram/candidate
mark, full Remic scroll, map + directions, honest hours placeholder. App journey
18/18 (upload → candidates → forge single + premier → grade A both).
