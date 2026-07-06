# Hero Centered

**Category:** `layouts`  **Perf tier:** expensive  **Cost tier:** cheap  **Applies unprompted:** no

## What it does
Reusable layout system past the generic bento. Composable with fx-kitchen backgrounds and surfaces.

## Files
- `README.md` — this file
- `pipeline.md` — AI pipeline (for content-rescue/extraction/polish recipes)
- `component.tsx` — React drop-in (where applicable)
- `functions.ts` — server fn (where applicable)
- `snippet.html` — vanilla fallback
- `variants.md`
- `preview.png`

## Natural-language triggers
- "lay it out as hero centered"
- "layout: hero centered"
- "use the hero centered"
- "grid: hero centered"
- "hero centered"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip hero centered`
- Regulated verticals without human review
- Content includes minors' faces without consent
