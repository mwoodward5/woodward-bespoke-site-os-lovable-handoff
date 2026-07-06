# Release Notes Auto

**Category:** `deploy`  **Perf tier:** cheap  **Cost tier:** cheap  **Applies unprompted:** no

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
- "deploy: release notes auto"
- "dns: release notes auto"
- "email: release notes auto"
- "status: release notes auto"
- "release notes auto"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip release notes auto`
- Regulated verticals without human review
- Content includes minors' faces without consent
