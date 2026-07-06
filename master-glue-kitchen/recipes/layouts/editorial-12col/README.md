# Editorial 12col

**Category:** `layouts`  **Perf tier:** cheap  **Cost tier:** cheap  **Applies unprompted:** no

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
- "lay it out as editorial 12col"
- "layout: editorial 12col"
- "use the editorial 12col"
- "grid: editorial 12col"
- "editorial 12col"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip editorial 12col`
- Regulated verticals without human review
- Content includes minors' faces without consent
