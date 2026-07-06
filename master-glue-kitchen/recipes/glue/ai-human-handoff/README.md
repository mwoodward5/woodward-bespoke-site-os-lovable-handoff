# Ai Human Handoff

**Category:** `glue`  **Perf tier:** moderate  **Cost tier:** expensive  **Applies unprompted:** no

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
- "wire ai human handoff"
- "connect ai human handoff"
- "integrate with ai human handoff"
- "embed ai human handoff"
- "ai human handoff"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip ai human handoff`
- Regulated verticals without human review
- Content includes minors' faces without consent
