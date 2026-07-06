# Alt Text Auditor

**Category:** `qc-audit`  **Perf tier:** cheap  **Cost tier:** expensive  **Applies unprompted:** no

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
- "audit alt text auditor"
- "QC alt text auditor"
- "check alt text auditor"
- "validate alt text auditor"
- "alt text auditor"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip alt text auditor`
- Regulated verticals without human review
- Content includes minors' faces without consent
