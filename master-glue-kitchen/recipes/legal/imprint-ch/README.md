# Imprint Ch

**Category:** `legal`  **Perf tier:** expensive  **Cost tier:** free  **Applies unprompted:** no

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
- "add legal imprint ch"
- "compliance: imprint ch"
- "consent imprint ch"
- "privacy imprint ch"
- "imprint ch"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip imprint ch`
- Regulated verticals without human review
- Content includes minors' faces without consent
