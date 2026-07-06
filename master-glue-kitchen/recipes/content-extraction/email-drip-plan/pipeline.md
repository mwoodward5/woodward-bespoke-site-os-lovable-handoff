# Pipeline — Email Drip Plan

Runs at build time. Codex reads this and executes each step against user-provided input.

## Input
- Client-provided assets (see `slot_map` below)

## Steps
1. Read raw input (paragraph, PDF, CSV, URL).
2. Call `google/gemini-2.5-flash` with structured-output schema (see `prompts/*` in this kitchen).
3. Validate returned JSON; retry once with stricter prompt if malformed.
4. Map returned fields into route templates (hero/about/services/faq).
5. Emit meta tags + JSON-LD + sitemap fragment.
6. Write QC report noting any gaps (missing hours, missing address, low-confidence phone).

## Output
Writes final assets under `/public/assets/rescued/` (or specified path) and a JSON report at
`/mnt/documents/email-drip-plan-report.json`.

## Fallback
If AI step fails, keep the original asset and log the failure in the QC report — never ship broken output.

## slot_map
```json
{
  "input": "user_provided",
  "output": "/public/assets/rescued/email-drip-plan"
}
```
