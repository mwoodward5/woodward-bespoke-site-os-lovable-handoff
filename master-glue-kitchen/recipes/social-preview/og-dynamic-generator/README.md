# Og Dynamic Generator

**Category:** `social-preview`  **Perf tier:** expensive  **Cost tier:** expensive  **Applies unprompted:** no

## What it does
Rich preview surface for every network — dynamic OG images, per-language variants, per-platform aspect ratios.

## Files
- `README.md` — this file
- `pipeline.md` — AI pipeline (for content-rescue/extraction/polish recipes)
- `component.tsx` — React drop-in (where applicable)
- `functions.ts` — server fn (where applicable)
- `snippet.html` — vanilla fallback
- `variants.md`
- `preview.png`

## Natural-language triggers
- "social preview: og dynamic generator"
- "share card: og dynamic generator"
- "og: og dynamic generator"
- "rich link: og dynamic generator"
- "og dynamic generator"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip og dynamic generator`
- Regulated verticals without human review
- Content includes minors' faces without consent
