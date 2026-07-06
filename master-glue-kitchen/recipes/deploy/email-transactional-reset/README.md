# Email Transactional Reset

**Category:** `deploy`  **Perf tier:** free  **Cost tier:** free  **Applies unprompted:** no

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
- "deploy: email transactional reset"
- "dns: email transactional reset"
- "email: email transactional reset"
- "status: email transactional reset"
- "email transactional reset"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip email transactional reset`
- Regulated verticals without human review
- Content includes minors' faces without consent
