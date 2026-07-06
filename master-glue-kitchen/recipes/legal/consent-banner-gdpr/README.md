# Consent Banner Gdpr

**Category:** `legal`  **Perf tier:** cheap  **Cost tier:** expensive  **Applies unprompted:** no

## What it does
Compliance surface: consent banners, policies, imprints, security.txt.

## Files
- `README.md` — this file
- `pipeline.md` — AI pipeline (for content-rescue/extraction/polish recipes)
- `component.tsx` — React drop-in (where applicable)
- `functions.ts` — server fn (where applicable)
- `snippet.html` — vanilla fallback
- `variants.md`
- `preview.png`

## Natural-language triggers
- "add legal consent banner gdpr"
- "compliance: consent banner gdpr"
- "consent consent banner gdpr"
- "privacy consent banner gdpr"
- "consent banner gdpr"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip consent banner gdpr`
- Regulated verticals without human review
- Content includes minors' faces without consent
