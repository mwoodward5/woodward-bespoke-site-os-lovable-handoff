# Photo De Yellow

**Category:** `content-rescue`  **Perf tier:** free  **Cost tier:** expensive  **Applies unprompted:** no

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
- "fix the photo de yellow"
- "rescue the photo de yellow"
- "remaster the photo de yellow"
- "make gorgeous: photo de yellow"
- "upgrade the photo de yellow"
- "photo de yellow"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip photo de yellow`
- Regulated verticals without human review
- Content includes minors' faces without consent
