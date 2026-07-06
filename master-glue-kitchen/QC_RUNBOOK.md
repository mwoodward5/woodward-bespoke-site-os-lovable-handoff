# QC RUNBOOK

## Before every ship

Run `recipes/qc-audit/*` in this order:

1. `contrast-auditor` — WCAG AA
2. `alt-text-auditor`
3. `broken-link-crawler`
4. `sitemap-validator`
5. `jsonld-validator`
6. `missing-favicon` / `missing-og` / `missing-manifest`
7. `touch-target-mobile` (44px minimum)
8. `duplicate-photo-detector`
9. `gallery-consistency`
10. `cwv-runner` (LCP, INP, CLS, TTFB)
11. `wcag-22-aa-sweep`
12. `text-scaling-200`
13. `keyboard-only-nav`
14. `rtl-flip-check` (if hreflang includes RTL locales)
15. `dark-mode-contrast`
16. `print-view-check`
17. `social-preview-lint` — one final crawl of each shared URL
18. `consent-cookie-audit`
19. `legal-links-check` — privacy, terms, contact, imprint (if EU)

## Severity
- **critical** — blocks ship (broken image, missing title, contrast < AA on primary text)
- **major** — flagged in QC report; must be acknowledged
- **minor** — auto-fixed silently when possible

## Output
Report written to `/mnt/documents/qc-report.md` + `.json`.
