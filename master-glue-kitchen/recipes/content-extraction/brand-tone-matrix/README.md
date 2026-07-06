# Brand Tone Matrix

**Category:** `content-extraction`  **Perf tier:** free  **Cost tier:** expensive  **Applies unprompted:** no

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
- "turn this into brand tone matrix"
- "extract brand tone matrix"
- "generate site copy from brand tone matrix"
- "build a page from brand tone matrix"
- "brand tone matrix"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip brand tone matrix`
- Regulated verticals without human review
- Content includes minors' faces without consent
