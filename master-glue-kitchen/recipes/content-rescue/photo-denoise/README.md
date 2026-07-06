# Photo Denoise

**Category:** `content-rescue`  **Perf tier:** free  **Cost tier:** moderate  **Applies unprompted:** no

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
- "fix the photo denoise"
- "rescue the photo denoise"
- "remaster the photo denoise"
- "make gorgeous: photo denoise"
- "upgrade the photo denoise"
- "photo denoise"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip photo denoise`
- Regulated verticals without human review
- Content includes minors' faces without consent
