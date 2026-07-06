# CODEX HANDOFF PROMPT

Copy everything below into Codex (or any coding agent) after uploading the zip:

---

You have received `razzle-fx-kitchen.zip`. Unzip at the repo root so a folder
named `razzle-fx-kitchen/` sits at the top level.

**Read in this exact order before touching code:**
1. `razzle-fx-kitchen/START_HERE.md`
2. `razzle-fx-kitchen/README.md`
3. `razzle-fx-kitchen/INDEX.md`
4. `razzle-fx-kitchen/HOW_TO_ASK.md`
5. `razzle-fx-kitchen/COMPOSE_A_HERO.md`
6. `razzle-fx-kitchen/REFUSAL_CRITERIA.md`

**Machine-readable manifests you MUST index:**
- `razzle-fx-kitchen/index.json` — canonical recipe list
- `razzle-fx-kitchen/phrases.json` — 1000 phrase→path mappings
- `razzle-fx-kitchen/tokens/*.json` — design tokens

**When the user asks for an effect** ("make the logo shimmer", "aurora background",
"brutalist card"):
1. Match the phrase against `phrases.json` (fuzzy, case-insensitive).
2. Load the recipe at the resolved path.
3. Prefer `component.tsx` for React projects, `snippet.html`+`styles.css` otherwise.
4. Honor `REFUSAL_CRITERIA.md` before applying.

**Composed heroes** live in `examples/<archetype>--<variant>/index.html` — open one
for reference when the user asks for a full hero, not a single effect.

Never edit files inside `razzle-fx-kitchen/` — treat it as a read-only library.
Copy the pieces you use into the consuming project.
