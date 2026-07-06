# Headshot Restyle Editorial

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
- "fix the headshot restyle editorial"
- "rescue the headshot restyle editorial"
- "remaster the headshot restyle editorial"
- "make gorgeous: headshot restyle editorial"
- "upgrade the headshot restyle editorial"
- "headshot restyle editorial"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip headshot restyle editorial`
- Regulated verticals without human review
- Content includes minors' faces without consent
