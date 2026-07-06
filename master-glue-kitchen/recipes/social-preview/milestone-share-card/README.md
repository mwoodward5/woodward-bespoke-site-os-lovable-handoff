# Milestone Share Card

**Category:** `social-preview`  **Perf tier:** expensive  **Cost tier:** free  **Applies unprompted:** no

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
- "social preview: milestone share card"
- "share card: milestone share card"
- "og: milestone share card"
- "rich link: milestone share card"
- "milestone share card"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip milestone share card`
- Regulated verticals without human review
- Content includes minors' faces without consent
