# CODEX HANDOFF PROMPT

Copy everything below into Codex (or any coding agent) after uploading the zip:

---

You have received `site-superpowers-kitchen.zip`. Unzip at the repo root so
`site-superpowers-kitchen/` sits at the top level. This is the **functional**
companion to `razzle-fx-kitchen` — pair them together for both look and behavior.

Read in this exact order:
1. `site-superpowers-kitchen/START_HERE.md`
2. `site-superpowers-kitchen/README.md`
3. `site-superpowers-kitchen/INDEX.md`
4. `site-superpowers-kitchen/WIRING_GUIDE.md`
5. `site-superpowers-kitchen/STACK_COMPATIBILITY.md`
6. `site-superpowers-kitchen/SECURITY_CHECKLIST.md`
7. `site-superpowers-kitchen/COST_GUIDE.md`
8. `site-superpowers-kitchen/REFUSAL_CRITERIA.md`

Machine-readable manifests to index:
- `index.json` — canonical recipe list
- `phrases.json` — 1,000 phrase→path mappings
- `tokens/models.json`, `tokens/voices.json`, `tokens/system-prompts.json`,
  `tokens/moderation.json`, `tokens/rate-limits.json`, `tokens/guardrails.json`
- `prompts/*.md` — 200 reusable system prompts

When the user asks for a behavior ("add a support chatbot", "read the article
aloud", "live cursors"):
1. Fuzzy-match against `phrases.json`.
2. Load the recipe at the resolved path.
3. Prefer `route.ts` + `functions.ts` for server logic, `component.tsx` for UI.
4. If the recipe ships `sql.sql`, add it to the next migration (never modify
   another migration in place).
5. Honor `SECURITY_CHECKLIST.md` before shipping.

Composed reference apps live in `apps/<slug>/` — each names its primary recipe
in `SUPPORTING.md`. Never edit files inside `site-superpowers-kitchen/` — treat
it as a read-only library and copy pieces into the consuming project.
