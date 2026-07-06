# Pipeline — Social Preview Lint

Runs at build time. Codex reads this and executes each step against user-provided input.

## Input
- Client-provided assets (see `slot_map` below)

## Steps
1. Crawl the built site (or dev preview) and run the checker.
2. Emit findings as `{severity, path, message, suggested_fix}` rows.
3. Autofix when the recipe has `autofix: true`; otherwise flag in the report.
4. Fail the build only if severity=critical AND user has opted into strict mode.

## Output
Writes final assets under `/public/assets/rescued/` (or specified path) and a JSON report at
`/mnt/documents/social-preview-lint-report.json`.

## Fallback
If AI step fails, keep the original asset and log the failure in the QC report — never ship broken output.

## slot_map
```json
{
  "input": "user_provided",
  "output": "/public/assets/rescued/social-preview-lint"
}
```
