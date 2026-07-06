# Always Splash Screens

**Category:** `polish-rules`  **Perf tier:** free  **Cost tier:** expensive  **Applies unprompted:** yes

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
- "always always splash screens"
- "never always splash screens"
- "polish: always splash screens"
- "auto-apply always splash screens"
- "always splash screens"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip always splash screens`
- Regulated verticals without human review
- Content includes minors' faces without consent
