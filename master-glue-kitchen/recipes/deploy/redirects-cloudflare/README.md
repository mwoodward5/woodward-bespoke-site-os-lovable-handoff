# Redirects Cloudflare

**Category:** `deploy`  **Perf tier:** cheap  **Cost tier:** expensive  **Applies unprompted:** no

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
- "deploy: redirects cloudflare"
- "dns: redirects cloudflare"
- "email: redirects cloudflare"
- "status: redirects cloudflare"
- "redirects cloudflare"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip redirects cloudflare`
- Regulated verticals without human review
- Content includes minors' faces without consent
