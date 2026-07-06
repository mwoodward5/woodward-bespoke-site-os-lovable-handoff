# Store Locator

**Category:** `local-seo`  **Perf tier:** cheap  **Cost tier:** moderate  **Applies unprompted:** no

## What it does
Local + geo signals: LocalBusiness schema, GeoCoordinates, multi-location, hreflang, timezone/currency.

## Files
- `README.md` — this file
- `pipeline.md` — AI pipeline (for content-rescue/extraction/polish recipes)
- `component.tsx` — React drop-in (where applicable)
- `functions.ts` — server fn (where applicable)
- `snippet.html` — vanilla fallback
- `variants.md`
- `preview.png`

## Natural-language triggers
- "local seo store locator"
- "near me store locator"
- "service area store locator"
- "map: store locator"
- "store locator"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip store locator`
- Regulated verticals without human review
- Content includes minors' faces without consent
