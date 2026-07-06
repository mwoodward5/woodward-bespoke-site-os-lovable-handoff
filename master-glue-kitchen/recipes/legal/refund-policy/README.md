# Refund Policy

**Category:** `legal`  **Perf tier:** free  **Cost tier:** moderate  **Applies unprompted:** no

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
- "add legal refund policy"
- "compliance: refund policy"
- "consent refund policy"
- "privacy refund policy"
- "refund policy"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip refund policy`
- Regulated verticals without human review
- Content includes minors' faces without consent
