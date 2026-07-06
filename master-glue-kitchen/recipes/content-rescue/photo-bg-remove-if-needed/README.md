# Photo Bg Remove If Needed

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
- "fix the photo bg remove if needed"
- "rescue the photo bg remove if needed"
- "remaster the photo bg remove if needed"
- "make gorgeous: photo bg remove if needed"
- "upgrade the photo bg remove if needed"
- "photo bg remove if needed"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip photo bg remove if needed`
- Regulated verticals without human review
- Content includes minors' faces without consent
