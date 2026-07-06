# Photo To 5sec Video

**Category:** `content-rescue`  **Perf tier:** expensive  **Cost tier:** expensive  **Applies unprompted:** no

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
- "fix the photo to 5sec video"
- "rescue the photo to 5sec video"
- "remaster the photo to 5sec video"
- "make gorgeous: photo to 5sec video"
- "upgrade the photo to 5sec video"
- "photo to 5sec video"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip photo to 5sec video`
- Regulated verticals without human review
- Content includes minors' faces without consent
