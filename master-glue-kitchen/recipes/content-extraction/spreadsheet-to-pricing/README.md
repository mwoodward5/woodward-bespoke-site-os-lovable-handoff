# Spreadsheet To Pricing

**Category:** `content-extraction`  **Perf tier:** free  **Cost tier:** cheap  **Applies unprompted:** no

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
- "turn this into spreadsheet to pricing"
- "extract spreadsheet to pricing"
- "generate site copy from spreadsheet to pricing"
- "build a page from spreadsheet to pricing"
- "spreadsheet to pricing"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip spreadsheet to pricing`
- Regulated verticals without human review
- Content includes minors' faces without consent
