# Photo Metadata Strip

**Category:** `content-rescue`  **Perf tier:** expensive  **Cost tier:** free  **Applies unprompted:** no

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
- "fix the photo metadata strip"
- "rescue the photo metadata strip"
- "remaster the photo metadata strip"
- "make gorgeous: photo metadata strip"
- "upgrade the photo metadata strip"
- "photo metadata strip"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip photo metadata strip`
- Regulated verticals without human review
- Content includes minors' faces without consent
