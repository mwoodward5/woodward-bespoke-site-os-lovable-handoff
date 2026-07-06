# Hero Generate From Brief

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
- "fix the hero generate from brief"
- "rescue the hero generate from brief"
- "remaster the hero generate from brief"
- "make gorgeous: hero generate from brief"
- "upgrade the hero generate from brief"
- "hero generate from brief"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip hero generate from brief`
- Regulated verticals without human review
- Content includes minors' faces without consent
