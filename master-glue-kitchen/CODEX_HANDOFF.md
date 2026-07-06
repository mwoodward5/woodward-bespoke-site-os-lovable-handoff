# CODEX HANDOFF PROMPT

Paste the block below into Codex after uploading all three zips.

---

You have three kitchens in this repo:
- `razzle-fx-kitchen/` — visual ingredients (backgrounds, logos, type, motion, surfaces, decor, icons, media, UX effects)
- `site-superpowers-kitchen/` — functional ingredients (AI, voice, realtime, auth, payments, RAG, search)
- `master-glue-kitchen/` — the glue (content rescue, GEO/AEO, local/geo SEO, social preview, first-prompt polish, QC audit, immersive, legal, deploy, integrations)

**Read this file first, every session:** `master-glue-kitchen/polish-rules.json`. Every rule with `unprompted: true` must be applied to every new site build unless the user says the `override_phrase`.

**On every new site build, run this exact flow:**

1. Read `master-glue-kitchen/FIRST_PROMPT_POLISH.md`.
2. Load `master-glue-kitchen/polish-rules.json` — apply every unprompted rule.
3. If user provides content assets:
   a. Photos → run `master-glue-kitchen/recipes/content-rescue/*` pipelines (see `CONTENT_RESCUE_PLAYBOOK.md`).
   b. Logo → vectorize + generate lockups + full favicon set.
   c. Gallery → aspect-harmonize + tone-unify + dedupe before rendering.
   d. Paragraph/PDF/CSV → `content-extraction/*` before generating routes.
4. Pick typography from `master-glue-kitchen/tokens/font-pairs.json` + scale from `type-scales.json`.
5. Pick layout from `master-glue-kitchen/recipes/layouts/*` matching content shape (see `LAYOUT_GUIDE.md`).
6. Compose visuals from `razzle-fx-kitchen/recipes/*` — background + surface + type.
7. Wire behaviors from `site-superpowers-kitchen/recipes/*` — chat, voice, realtime as requested.
8. Add GEO/AEO surface: `master-glue-kitchen/recipes/geo-aeo/*` — llms.txt, Speakable, FAQPage, comparison + glossary pages, entity graph.
9. Add local SEO surface if geo-relevant: `master-glue-kitchen/recipes/local-seo/*`.
10. Generate social preview per route: `master-glue-kitchen/recipes/social-preview/og-dynamic-generator`.
11. Run `master-glue-kitchen/recipes/qc-audit/*` before shipping. Autofix where safe, flag the rest in `/mnt/documents/qc-report.md`.
12. Add legal stubs: `master-glue-kitchen/recipes/legal/*`.
13. Add deploy glue: `master-glue-kitchen/recipes/deploy/*` matching the host (Cloudflare/Vercel/Netlify).

**Match phrases against `master-glue-kitchen/phrases.json` (1,200) + `site-superpowers-kitchen/phrases.json` (1,000) + `razzle-fx-kitchen/phrases.json` (1,000).**

**Cross-kitchen references live in `master-glue-kitchen/index.json` under `crossref`.**

Never edit files inside any of the three kitchens — treat them as read-only libraries. Copy the pieces you use.
