# Competitor Positioning Brief

**Category:** `content-extraction`  **Perf tier:** cheap  **Cost tier:** moderate  **Applies unprompted:** no

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
- "turn this into competitor positioning brief"
- "extract competitor positioning brief"
- "generate site copy from competitor positioning brief"
- "build a page from competitor positioning brief"
- "competitor positioning brief"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip competitor positioning brief`
- Regulated verticals without human review
- Content includes minors' faces without consent
