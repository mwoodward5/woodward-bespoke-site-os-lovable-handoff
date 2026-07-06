# Brand Color Extract

**Category:** `content-rescue`  **Perf tier:** expensive  **Cost tier:** cheap  **Applies unprompted:** no

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
- "fix the brand color extract"
- "rescue the brand color extract"
- "remaster the brand color extract"
- "make gorgeous: brand color extract"
- "upgrade the brand color extract"
- "brand color extract"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip brand color extract`
- Regulated verticals without human review
- Content includes minors' faces without consent
