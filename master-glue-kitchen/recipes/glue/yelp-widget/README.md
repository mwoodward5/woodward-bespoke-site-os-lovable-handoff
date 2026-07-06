# Yelp Widget

**Category:** `glue`  **Perf tier:** moderate  **Cost tier:** moderate  **Applies unprompted:** no

## What it does
Third-party integrations and connectors that tie the site into the wider stack.

## Files
- `README.md` — this file
- `pipeline.md` — AI pipeline (for content-rescue/extraction/polish recipes)
- `component.tsx` — React drop-in (where applicable)
- `functions.ts` — server fn (where applicable)
- `snippet.html` — vanilla fallback
- `variants.md`
- `preview.png`

## Natural-language triggers
- "wire yelp widget"
- "connect yelp widget"
- "integrate with yelp widget"
- "embed yelp widget"
- "yelp widget"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip yelp widget`
- Regulated verticals without human review
- Content includes minors' faces without consent
