# Podcast Share Card

**Category:** `social-preview`  **Perf tier:** cheap  **Cost tier:** moderate  **Applies unprompted:** no

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
- "social preview: podcast share card"
- "share card: podcast share card"
- "og: podcast share card"
- "rich link: podcast share card"
- "podcast share card"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip podcast share card`
- Regulated verticals without human review
- Content includes minors' faces without consent
