# Dmca Takedown

**Category:** `legal`  **Perf tier:** moderate  **Cost tier:** cheap  **Applies unprompted:** no

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
- "add legal dmca takedown"
- "compliance: dmca takedown"
- "consent dmca takedown"
- "privacy dmca takedown"
- "dmca takedown"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip dmca takedown`
- Regulated verticals without human review
- Content includes minors' faces without consent
