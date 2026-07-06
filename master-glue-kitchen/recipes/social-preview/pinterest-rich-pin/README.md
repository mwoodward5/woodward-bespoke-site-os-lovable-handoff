# Pinterest Rich Pin

**Category:** `social-preview`  **Perf tier:** cheap  **Cost tier:** free  **Applies unprompted:** no

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
- "social preview: pinterest rich pin"
- "share card: pinterest rich pin"
- "og: pinterest rich pin"
- "rich link: pinterest rich pin"
- "pinterest rich pin"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip pinterest rich pin`
- Regulated verticals without human review
- Content includes minors' faces without consent
