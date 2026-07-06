# Always Dedupe Photos

**Category:** `polish-rules`  **Perf tier:** expensive  **Cost tier:** moderate  **Applies unprompted:** yes

## What it does
Rules the agent applies unprompted on every new site. See `polish-rules.json` for the machine-readable set.

## Files
- `README.md` — this file
- `pipeline.md` — AI pipeline (for content-rescue/extraction/polish recipes)
- `component.tsx` — React drop-in (where applicable)
- `functions.ts` — server fn (where applicable)
- `snippet.html` — vanilla fallback
- `variants.md`
- `preview.png`

## Natural-language triggers
- "always always dedupe photos"
- "never always dedupe photos"
- "polish: always dedupe photos"
- "auto-apply always dedupe photos"
- "always dedupe photos"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip always dedupe photos`
- Regulated verticals without human review
- Content includes minors' faces without consent
