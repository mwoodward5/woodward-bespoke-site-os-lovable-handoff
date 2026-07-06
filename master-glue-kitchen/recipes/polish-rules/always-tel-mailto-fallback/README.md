# Always Tel Mailto Fallback

**Category:** `polish-rules`  **Perf tier:** cheap  **Cost tier:** expensive  **Applies unprompted:** yes

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
- "always always tel mailto fallback"
- "never always tel mailto fallback"
- "polish: always tel mailto fallback"
- "auto-apply always tel mailto fallback"
- "always tel mailto fallback"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip always tel mailto fallback`
- Regulated verticals without human review
- Content includes minors' faces without consent
