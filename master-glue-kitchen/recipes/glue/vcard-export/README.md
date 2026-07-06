# Vcard Export

**Category:** `glue`  **Perf tier:** free  **Cost tier:** cheap  **Applies unprompted:** no

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
- "wire vcard export"
- "connect vcard export"
- "integrate with vcard export"
- "embed vcard export"
- "vcard export"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip vcard export`
- Regulated verticals without human review
- Content includes minors' faces without consent
