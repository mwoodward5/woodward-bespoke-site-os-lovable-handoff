# Brand Color Palette

**Category:** `content-rescue`  **Perf tier:** moderate  **Cost tier:** cheap  **Applies unprompted:** no

## What it does
AI pipeline that transforms bad or generic client assets into editorial-grade output. Runs at build time or on-demand.

## Files
- `README.md` — this file
- `pipeline.md` — AI pipeline (for content-rescue/extraction/polish recipes)
- `component.tsx` — React drop-in (where applicable)
- `functions.ts` — server fn (where applicable)
- `snippet.html` — vanilla fallback
- `variants.md`
- `preview.png`

## Natural-language triggers
- "fix the brand color palette"
- "rescue the brand color palette"
- "remaster the brand color palette"
- "make gorgeous: brand color palette"
- "upgrade the brand color palette"
- "brand color palette"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip brand color palette`
- Regulated verticals without human review
- Content includes minors' faces without consent
