# Pipeline — Always Security Txt

Runs at build time. Codex reads this and executes each step against user-provided input.

## Input
- Client-provided assets (see `slot_map` below)

## Steps
1. Scan the current project for the condition described in `when`.
2. If the condition matches AND the user has not said the `override_phrase`, apply the fix.
3. Log the applied rule in `/mnt/documents/polish-report.json`.

## Output
Writes final assets under `/public/assets/rescued/` (or specified path) and a JSON report at
`/mnt/documents/always-security-txt-report.json`.

## Fallback
If AI step fails, keep the original asset and log the failure in the QC report — never ship broken output.

## slot_map
```json
{
  "input": "user_provided",
  "output": "/public/assets/rescued/always-security-txt"
}
```
