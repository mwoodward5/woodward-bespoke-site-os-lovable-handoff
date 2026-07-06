# Never Broken Image Guard

**Category:** `polish-rules`  **Perf tier:** expensive  **Cost tier:** free  **Applies unprompted:** yes

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
- "always never broken image guard"
- "never never broken image guard"
- "polish: never broken image guard"
- "auto-apply never broken image guard"
- "never broken image guard"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip never broken image guard`
- Regulated verticals without human review
- Content includes minors' faces without consent
