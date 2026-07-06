# Privacy Policy Gen

**Category:** `legal`  **Perf tier:** cheap  **Cost tier:** moderate  **Applies unprompted:** no

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
- "add legal privacy policy gen"
- "compliance: privacy policy gen"
- "consent privacy policy gen"
- "privacy privacy policy gen"
- "privacy policy gen"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip privacy policy gen`
- Regulated verticals without human review
- Content includes minors' faces without consent
