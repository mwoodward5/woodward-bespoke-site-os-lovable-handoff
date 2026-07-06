# Missing Favicon

**Category:** `qc-audit`  **Perf tier:** free  **Cost tier:** cheap  **Applies unprompted:** no

## What it does
Pre-launch quality control. Runs a checker, emits a report, autofixes when safe, flags when not.

## Files
- `README.md` — this file
- `pipeline.md` — AI pipeline (for content-rescue/extraction/polish recipes)
- `component.tsx` — React drop-in (where applicable)
- `functions.ts` — server fn (where applicable)
- `snippet.html` — vanilla fallback
- `variants.md`
- `preview.png`

## Natural-language triggers
- "audit missing favicon"
- "QC missing favicon"
- "check missing favicon"
- "validate missing favicon"
- "missing favicon"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip missing favicon`
- Regulated verticals without human review
- Content includes minors' faces without consent
