# Bespoke Site OS — Builder Engine Spec v5

Version: 5.0.0
Replaces: v4 (`docs/LOVABLE_A_PLUS_META_PROMPT_V4_SOURCE.txt`)
Status: canonical. Any conflict with v4 → v5 wins.

## 0. Prime directive

The engine turns **one enriched business packet** into an A+ preview site with
zero per-site hand design. If a site ships that a knowledgeable stranger would
call "templated," "generator-voiced," or "generic stock," the pipeline failed
— not the operator. The QC gate (§7) must reject that output.

## 1. Non-negotiables (fail the build if violated)

1. **Hero layer count ≥ 6.** See §3.
2. **No two sites in a batch share a layout signature.** See §4.
3. **Logo renders 72–80px in hero/header when layout allows.** See §5.
4. **Every rendered fact traces to `enrichment_sources`.** No invented awards,
   years, project counts, testimonials, addresses, or team members.
5. **No internal/scaffolding language ships to production.** Ban-list in §8.
6. **No repeated button, card, or section grammar within a batch.**
7. **Reduced-motion path present** on every animated element.
8. **Lighthouse (mobile): perf ≥ 90, a11y = 100, SEO = 100.** OR the QC report
   explains why not with an actionable fix.

## 2. Pipeline stages

```
discover → scrape → rescue → design → build → qc → deploy
```

Each stage is a Node ESM module under `factory/pipeline/`. Each reads a
`Packet` and writes a mutated `Packet`. Stages stream status via SSE for the
Builder Console (§10). Stages are independently callable for repair mode.

| # | Stage | Owner | Reads | Writes |
|---|-------|-------|-------|--------|
| 1 | discover | `01-discover.mjs` | prompt + urls | `enrichment_sources` |
| 2 | scrape | `02-scrape.mjs` | firecrawl targets | `raw_content`, `media` |
| 3 | rescue | `03-rescue.mjs` | media | `logo_remastered`, `dedup`, `palette` |
| 4 | design | `04-design.mjs` | packet | `hero_family`, `layout_seed`, `section_plan`, `motif`, `voice_persona` |
| 5 | build | `05-build.mjs` | design | `generated-sites/<slug>/` |
| 6 | qc | `06-qc.mjs` | built site | `qc-report.html`, exit 1 on fail |
| 7 | deploy | `07-deploy.mjs` | built site | vercel preview URL |

## 3. Hero anatomy contract (8 layers, min 6 present)

Every hero MUST compose from this layer set. `hero_family` decides which are
foreground vs background and how they're arranged.

1. **Media plane** — Veo video (preferred), Gemini still, or Firecrawl-sourced
   photo. Never generic Unsplash.
2. **Gradient veil** — trade + palette-aware, not black-on-image default.
3. **Grain / texture** — SVG turbulence or noise mix, opacity ≤ 0.35.
4. **Motif overlay** — trade-specific schematic. Landscape = botanical
   contour, roofing = slope diagram, excavation = survey grid, etc.
   Motif chosen by trade in `factory/heroes/motifs/`.
5. **Kinetic headline** — per-word reveal, 60–90ms stagger, respects
   reduced-motion.
6. **Live widget** — interactive: yardage estimator, service-map picker,
   material lab swatch, quote timer, etc. Chosen by `hero_family`.
7. **Count-ups** — 3 stats from `enrichment_sources` (never faked).
8. **Marquee / ledger** — trade services + service areas from GBP.

Layer count is measured by DOM: `<video>`, `<svg>`, `<canvas>`, `<img>`,
gradient-styled elements, and layers with class hints (`grain`, `motif`,
`overlay`, `veil`, `marquee`) count. QC fails at count < 6.

## 4. Hero families & layout seed

Six families in `factory/heroes/`. Each has different layout logic — NOT a
style swap.

| Family | Content placement | Logo scale/position | Media shape |
|--------|-------------------|---------------------|-------------|
| `cinematic-video-parallax` | Left, oversized headline | 72–80px, top-left | Full-bleed video |
| `split-editorial-index` | Right column magazine copy | 80px, sticky sidebar | Left photo essay |
| `service-map-pins` | Bottom sheet | 72px, header only | Interactive region map |
| `material-lab-swatch` | Center, small | 76px header | Grid of zoomable swatches |
| `magazine-owner-letter` | Wide typographic block | 80px, signature-adjacent | Portrait cutout right |
| `atlas-grid-reveal` | 12-cell atlas | 72px header | Cell hover reveals |

**Layout seed.** `factory/lib/hero-seed.mjs` takes `slug + trade` and emits a
deterministic seed. The seed shuffles:

- Layer z-order (within family constraints)
- SVG mask blob (8-point Catmull-Rom, 3 smoothness bands)
- 12-col grid asymmetry (headline width 5–8 cols)
- Motif overlay placement (4 quadrants × 3 scales)
- Palette variance (2 hue rotations within brand)
- Motion cadence (3 pacing presets)

**Anti-repetition gate.** `qc-audit/layout-signature.mjs` hashes:
- Hero layer stack tag+role tree, depth 4, SHA-256
- First-4-section structural fingerprint
- Button geometry (radius + padding + border pattern signature)
- Card geometry (aspect + shadow + gap signature)

Two sites within Hamming distance 4 = collision → build fails.

## 5. Logo rules

- Source order: GBP → Firecrawl branding scrape → user upload → `proposed:true`
  AI-generated mark.
- Any generated mark carries `logo_source.proposed = true` metadata. Console
  surfaces this privately to the operator; site never advertises it.
- Remaster pipeline: bg removal (Lovable AI Gateway) → 2× upscale
  (Replicate-compatible endpoint) → SVG traced when possible.
- Render size: **72–80px in hero/header** where layout allows. QC asserts
  computed CSS height of the header logo element.
- Layouts that legitimately can't hit 72–80px (letter-form marks in
  `magazine-owner-letter`) MUST call `logoException(reason)` in the
  section-plan; QC accepts documented exceptions only.

## 6. Enrichment & fallback rules

Every field carries a source in `enrichment_sources`:

```json
"enrichment_sources": {
  "services":     { "source": "firecrawl", "confidence": 0.92 },
  "hours":        { "source": "gbp",       "confidence": 1.00 },
  "reviews":      { "source": "gbp",       "confidence": 1.00 },
  "logo":         { "source": "gbp",       "confidence": 1.00 },
  "colors":       { "source": "firecrawl-branding", "confidence": 0.7 },
  "years_in_biz": { "source": "manual",    "confidence": 1.00 }
}
```

**Fallback rules (never invent):**
- Missing years → omit stat block, replace with services-count stat.
- Missing testimonials → omit review section, replace with services process
  section.
- Missing team photos → owner-letter section without portrait.
- Missing hours → "By appointment" only if operator confirms in packet.
- Missing service areas → single-city footer, no county coverage claim.
- Missing logo → `proposed:true` remaster + operator confirmation required
  before deploy.

## 7. QA gates (hard)

`qc-audit/qc.mjs` v5 runs all checks. Any fail → exit 1, blocks Vercel
promotion.

| Check | Script | Fails when |
|-------|--------|-----------|
| Hero layer count | `hero-anatomy.mjs` | < 6 layers |
| Layout signature | `layout-signature.mjs` | Hamming ≤ 4 vs any batch site |
| Logo size | `logo-size.mjs` | Not 72–80px & no exception recorded |
| Source-asset usage | `source-usage.mjs` | 0 Firecrawl/GBP media used |
| Enrichment completeness | `enrichment.mjs` | Any rendered fact w/o source |
| Copy ban-list | `copy-ban-scan.mjs` | Any banned phrase (§8) present |
| Button/card grammar | `grammar-dedup.mjs` | Signature match vs batch |
| Image dedup | `image-dedup.mjs` | pHash collision within/across batch |
| Screenshots | `screenshots.mjs` | Missing desktop OR mobile fold |
| Lighthouse | `lighthouse.mjs` | perf < 90, a11y < 100, SEO < 100 |
| OG per route | `social-preview.mjs` | Any route shares root OG image |
| JSON-LD | `structured-data.mjs` | Missing LocalBusiness/Service/FAQ/Breadcrumb |
| Overflow | `overflow-scan.mjs` | scrollWidth > width at 320px |
| Reduced motion | `motion.mjs` | Animation w/o `prefers-reduced-motion` fallback |

## 8. Copy ban-list (excerpt — full list in `copy-voice/ban-list.json`)

Phrases that scream "generator": `one-stop shop`, `presented with`, `crisp
explanation`, `visual cue`, `cutting-edge`, `premium preview`, `industry-leading`,
`world-class`, `unparalleled`, `here at [company] we`, `we pride ourselves`,
`nestled in`, `look no further`, `contact us today for a free`, `your trusted
partner`, `bring your vision to life`, `we've got you covered`, `state-of-the-art`,
`hassle-free`, `next-level`, `elevate your`, `unlock the potential`, and 20
more captured from the audit of the 5 live sites.

## 9. Voice persona

`voice_persona` in the queue schema drives copy generation:

```json
"voice_persona": {
  "owner_name": "Signature Landscape",
  "years_in_biz": 12,
  "first_person_snippets": ["We started in Clovis in 2013 with one truck..."],
  "banned_phrases": ["+30 words from ban-list.json"],
  "tone": "confident, specific, local"
}
```

Snippets come from Firecrawl review scrapes and GBP owner responses. Never
invent.

## 10. Builder Console

`engine/console/` is the reusable front door. See `engine/console/README.md`.

Inputs: prompt, business fields, source URLs, source platform, build type,
toggles for Firecrawl/GBP/SERP/Veo/Map/Chat/PaymentCTA. Output: Vercel URL,
screenshots grid, letter grade, JSON packet, error log. Live SSE timeline for
`discover → scrape → rescue → design → build → qc → deploy`.

Same pipeline runs headless: `pnpm build-site --packet packets/<slug>.json`.

## 11. Video pipeline (Veo-first)

Creative path is **Veo 3 / Gemini video**, not ffmpeg. `asset-pipeline/veo-prompt.mjs`
emits a submission-ready prompt JSON from `trade + motif + region + owner_story +
palette`. Operator submits to Veo; the resulting MP4 is written to
`generated-sites/<slug>/media/hero.mp4`.

Fallbacks in order:
1. `gemini-still.mjs` — Gemini 3 Pro Image cinematic still (branded), used as
   hero background image while Veo render is pending.
2. `poster-frame.mjs` — pure technical: extracts a poster from an existing
   MP4 for the `<video poster>` attribute. NOT a creative source.

ffmpeg is used only for the technical poster extraction. It is never the
creative path.

## 12. Machine-readable appendix

See `generator-queue-v5.schema.json` for the packet contract.
