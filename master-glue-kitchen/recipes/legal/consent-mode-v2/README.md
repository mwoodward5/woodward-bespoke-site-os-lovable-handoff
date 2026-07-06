# Consent Mode V2

**Category:** `legal`  **Perf tier:** moderate  **Cost tier:** free  **Applies unprompted:** no

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
- "add legal consent mode v2"
- "compliance: consent mode v2"
- "consent consent mode v2"
- "privacy consent mode v2"
- "consent mode v2"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip consent mode v2`
- Regulated verticals without human review
- Content includes minors' faces without consent
