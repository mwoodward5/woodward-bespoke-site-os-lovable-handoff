# Before After Slider

**Category:** `content-rescue`  **Perf tier:** expensive  **Cost tier:** moderate  **Applies unprompted:** no

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
- "fix the before after slider"
- "rescue the before after slider"
- "remaster the before after slider"
- "make gorgeous: before after slider"
- "upgrade the before after slider"
- "before after slider"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip before after slider`
- Regulated verticals without human review
- Content includes minors' faces without consent
