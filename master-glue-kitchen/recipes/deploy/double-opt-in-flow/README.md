# Double Opt In Flow

**Category:** `deploy`  **Perf tier:** expensive  **Cost tier:** moderate  **Applies unprompted:** no

## What it does
Deployment glue: headers/redirects per host, DNS, transactional email, status page, changelog.

## Files
- `README.md` — this file
- `pipeline.md` — AI pipeline (for content-rescue/extraction/polish recipes)
- `component.tsx` — React drop-in (where applicable)
- `functions.ts` — server fn (where applicable)
- `snippet.html` — vanilla fallback
- `variants.md`
- `preview.png`

## Natural-language triggers
- "deploy: double opt in flow"
- "dns: double opt in flow"
- "email: double opt in flow"
- "status: double opt in flow"
- "double opt in flow"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip double opt in flow`
- Regulated verticals without human review
- Content includes minors' faces without consent
