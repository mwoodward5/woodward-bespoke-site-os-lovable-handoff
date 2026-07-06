# Headshot Lighting Match

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
- "fix the headshot lighting match"
- "rescue the headshot lighting match"
- "remaster the headshot lighting match"
- "make gorgeous: headshot lighting match"
- "upgrade the headshot lighting match"
- "headshot lighting match"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip headshot lighting match`
- Regulated verticals without human review
- Content includes minors' faces without consent
