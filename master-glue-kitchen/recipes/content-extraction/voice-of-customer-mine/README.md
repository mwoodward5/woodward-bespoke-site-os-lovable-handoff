# Voice Of Customer Mine

**Category:** `content-extraction`  **Perf tier:** cheap  **Cost tier:** free  **Applies unprompted:** no

## What it does
Turns a scrap of client input (one paragraph, one PDF, one CSV) into full-site copy + structured data.

## Files
- `README.md` — this file
- `pipeline.md` — AI pipeline (for content-rescue/extraction/polish recipes)
- `component.tsx` — React drop-in (where applicable)
- `functions.ts` — server fn (where applicable)
- `snippet.html` — vanilla fallback
- `variants.md`
- `preview.png`

## Natural-language triggers
- "turn this into voice of customer mine"
- "extract voice of customer mine"
- "generate site copy from voice of customer mine"
- "build a page from voice of customer mine"
- "voice of customer mine"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip voice of customer mine`
- Regulated verticals without human review
- Content includes minors' faces without consent
