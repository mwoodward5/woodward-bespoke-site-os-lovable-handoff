# Csv To Service Pages

**Category:** `content-extraction`  **Perf tier:** moderate  **Cost tier:** expensive  **Applies unprompted:** no

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
- "turn this into csv to service pages"
- "extract csv to service pages"
- "generate site copy from csv to service pages"
- "build a page from csv to service pages"
- "csv to service pages"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip csv to service pages`
- Regulated verticals without human review
- Content includes minors' faces without consent
