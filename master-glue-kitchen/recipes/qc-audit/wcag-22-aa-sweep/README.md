# Wcag 22 Aa Sweep

**Category:** `qc-audit`  **Perf tier:** expensive  **Cost tier:** free  **Applies unprompted:** no

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
- "audit wcag 22 aa sweep"
- "QC wcag 22 aa sweep"
- "check wcag 22 aa sweep"
- "validate wcag 22 aa sweep"
- "wcag 22 aa sweep"

## Cross-kitchen references
- Visual layer: see `razzle-fx-kitchen/recipes/backgrounds/*`
- Functional layer: see `site-superpowers-kitchen/recipes/ai/*`

## Refuse when
- User explicitly overrides via phrase: `skip wcag 22 aa sweep`
- Regulated verticals without human review
- Content includes minors' faces without consent
