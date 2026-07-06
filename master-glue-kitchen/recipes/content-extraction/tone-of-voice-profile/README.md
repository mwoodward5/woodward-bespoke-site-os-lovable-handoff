# Tone Of Voice Profile

**Category:** `content-extraction`  **Perf tier:** expensive  **Cost tier:** moderate  **Applies unprompted:** no

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
- "turn this into tone of voice profile"
- "extract tone of voice profile"
- "generate site copy from tone of voice profile"
- "build a page from tone of voice profile"
- "tone of voice profile"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip tone of voice profile`
- Regulated verticals without human review
- Content includes minors' faces without consent
