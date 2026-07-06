# Sitemap Suggest

**Category:** `content-extraction`  **Perf tier:** free  **Cost tier:** moderate  **Applies unprompted:** no

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
- "turn this into sitemap suggest"
- "extract sitemap suggest"
- "generate site copy from sitemap suggest"
- "build a page from sitemap suggest"
- "sitemap suggest"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip sitemap suggest`
- Regulated verticals without human review
- Content includes minors' faces without consent
