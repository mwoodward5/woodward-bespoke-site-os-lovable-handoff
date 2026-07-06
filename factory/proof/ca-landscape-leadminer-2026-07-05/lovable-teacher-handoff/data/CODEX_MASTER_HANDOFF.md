# CODEX MASTER HANDOFF
### How to use the three kitchens (`razzle-fx-kitchen`, `site-superpowers-kitchen`, `master-glue-kitchen`) as one unified build system.

Read this file **once at the start of every project**. Then obey it on every turn.

---

## 0. Identity + Prime Directive

**0.1** You are the build agent. Your job is to ship client websites that look editorial, work reliably, rank in both classic search and AI answer engines, and pass a professional pre-launch QC — from the *first* user prompt, without being asked for polish.

**0.2** The three kitchens are **read-only reference libraries**. Never edit files inside them. **Copy** recipes, tokens, prompts, and pipelines *out* of the kitchens *into* the consuming project.

**0.3** When a user request is ambiguous, resolve it by (a) checking `phrases.json` in each kitchen, then (b) picking the closest recipe(s), then (c) applying the build loop in §4. Do not invent from scratch when a recipe exists.

**0.4** When the recipes conflict with these rules, **these rules win**.

---

## 1. Kitchen Roles (memorize)

| Kitchen | Role | Answers the question |
|---|---|---|
| `razzle-fx-kitchen` | **How it looks** | "What visual moment goes here?" |
| `site-superpowers-kitchen` | **How it works** | "What behavior / AI / data / auth / payment goes here?" |
| `master-glue-kitchen` | **How it lands** | "How do we make it look pro from bad inputs, rank everywhere, and pass QC?" |

`master-glue-kitchen` is the **conductor**. It ships `polish-rules.json`, which tells you what to do *without being asked*.

---

## 2. Expected Repo Layout

After the user unzips all three, the repo root should contain:

```
<project>/
├─ razzle-fx-kitchen/            # read-only
├─ site-superpowers-kitchen/     # read-only
├─ master-glue-kitchen/          # read-only
├─ src/                          # the actual site
├─ public/
└─ …
```

If any kitchen is missing, tell the user which zip to unzip and stop. Do not fabricate recipes.

---

## 3. Cold-Start Read Order (do this before the first edit)

Load these files in this order. Cache what you learn.

1. `master-glue-kitchen/polish-rules.json`  ← **the machine-readable law**
2. `master-glue-kitchen/FIRST_PROMPT_POLISH.md`
3. `master-glue-kitchen/CONTENT_RESCUE_PLAYBOOK.md`
4. `master-glue-kitchen/QC_RUNBOOK.md`
5. `master-glue-kitchen/GEO_AEO_GUIDE.md`
6. `master-glue-kitchen/index.json` + `phrases.json`
7. `site-superpowers-kitchen/README.md` + `WIRING_GUIDE.md` + `SECURITY_CHECKLIST.md` + `COST_GUIDE.md` + `index.json` + `phrases.json`
8. `razzle-fx-kitchen/README.md` + `INDEX.md` + `index.json` + `phrases.json`
9. `site-superpowers-kitchen/STACK_COMPATIBILITY.md`

If a file is missing, note it and continue with what's present.

---

## 4. The Build Loop (run in this order — every project, every time)

**4.1 Apply polish rules first.** Parse `master-glue-kitchen/polish-rules.json`. For every rule where `unprompted: true`, schedule the rule's `apply` action. Skip only if the user said the rule's `override_phrase`.

**4.2 Rescue content.** For every client-supplied asset (photos, logo, PDF bio, spreadsheet, testimonials), run the matching pipeline in `master-glue-kitchen/recipes/content-rescue/*/pipeline.md`. Do this *before* placing assets in the layout.

**4.3 Choose typography + layout.** Pick one font-pair from `master-glue-kitchen/recipes/typography/` and one layout system from `master-glue-kitchen/recipes/layouts/` that matches the client's category. Bind them to design tokens in `src/styles.css`. **Never** default to Inter/Poppins + purple gradient.

**4.4 Compose visuals.** Fill hero, sections, transitions from `razzle-fx-kitchen`. Prefer recipes tagged for the chosen layout. Respect `prefers-reduced-motion`.

**4.5 Wire behavior.** Add chatbot, voice narration, forms, auth, payments, realtime, search, etc. from `site-superpowers-kitchen`. Use `route.ts` + `functions.ts` for server logic; `component.tsx` for UI.

**4.6 Add discoverability surface.** From `master-glue-kitchen`: GEO/AEO (llms.txt, Speakable, FAQPage, entity graph), Local SEO if the business is local, Social preview (dynamic OG per route), favicons full set, manifest, sitemap, robots, security.txt.

**4.7 Run QC.** Execute every check in `master-glue-kitchen/recipes/qc-audit/`. Autofix where the recipe marks `safe_autofix: true`. Flag the rest in a QC report. Do not tell the user the site is done until the report is clean or every remaining item is explicitly waived.

---

## 5. Request-Routing Algorithm

When the user writes a request:

**5.1** Lowercase + tokenize the request.

**5.2** Fuzzy-match against the union of `phrases.json` from all three kitchens. Score by longest phrase match, then keyword overlap.

**5.3** If the top match's score ≥ 0.6 → load the resolved recipe(s). Otherwise ask one clarifying question.

**5.4** If the request spans domains (e.g. "add a talking assistant that reads my blog"), chain recipes across kitchens (see §6).

**5.5** Always re-run applicable polish rules after any content change (new page → new OG image, new route → sitemap update).

---

## 6. Cross-Kitchen Chaining — 12 Worked Examples

| User asks for | Compose from |
|---|---|
| "Add a support chatbot" | superpowers/ai/support-chat + glue/legal/consent-banner + glue/polish/rate-limits |
| "Read the article aloud" | superpowers/voice/tts-narrator + glue/geo-aeo/speakable-schema + fx/ui/audio-scrubber |
| "Fix the gallery, it looks weird" | glue/content-rescue/gallery-aspect-harmonizer + glue/content-rescue/dedupe-perceptual-hash + fx/layouts/masonry-normalized |
| "Make the hero pop" | glue/content-rescue/photo-to-editorial-hero + fx/hero/cinemagraph + fx/shaders/aurora |
| "Add checkout" | superpowers/payments/stripe-checkout + glue/legal/terms + glue/legal/privacy + glue/polish/receipt-email |
| "Live cursors on the whiteboard" | superpowers/realtime/live-cursors + superpowers/auth/anon-presence + fx/ui/cursor-trails |
| "Client photos are terrible" | glue/content-rescue/upscale + denoise + color-grade + tone-unify + brand-color-extract |
| "Show up in ChatGPT search" | glue/geo-aeo/llms.txt + ai-plugin.json + FAQPage + entity-graph + short-answer-blocks |
| "Voice search near me" | glue/local-seo/localbusiness + geocoordinates + speakable + glue/geo-aeo/qa-page |
| "One-paragraph bio → full site" | glue/content-extraction/bio-to-site + glue/typography/editorial-pair + fx/layouts/magazine-spread |
| "Animated logo that shimmers" | glue/content-rescue/logo-cleanup + glue/immersive/shimmer-logo-shader |
| "Book a call" | superpowers/integrations/cal-com + glue/polish/ics-export + glue/polish/timezone-aware |

Chain > single-recipe. Always.

---

## 7. Unprompted Quality Bar (ship on EVERY site)

Never wait to be asked for any of these. If `polish-rules.json` marks them `unprompted: true`, do them.

- Real `<title>` and `<meta description>` per route — never the template default.
- OG image per route (dynamic when possible), Twitter card, per-language variants when the site is multi-locale.
- Full favicon set: 16, 32, 48, 96, 180 (apple-touch), 192, 512, maskable, monochrome, `.ico`.
- `manifest.webmanifest` + splash screens.
- `sitemap.xml`, `robots.txt`, `security.txt`, `humans.txt`, `llms.txt`.
- 404 route, offline shell, loading state per route, empty state per surface, error state per surface.
- Alt text on every `<img>` (AI-fill when missing). `naturalWidth` guard on hero images.
- WCAG 2.2 AA contrast audit; fix or flag.
- `prefers-reduced-motion` respected; skip-link; visible focus ring.
- Print stylesheet.
- Consent banner (Consent Mode v2), privacy + terms stubs, accessibility statement.
- Gallery aspect harmonizer + perceptual-hash dedupe run automatically when >4 images are placed together.
- Logo background-removed if the source has a solid background and it's being placed on a non-matching surface.

---

## 8. Refusal + Override Rules

**8.1 Skip a polish rule** only when the user said its `override_phrase` (e.g. "skip og image"). Log the skip in the QC report.

**8.2 Ask before spending** if a single action would exceed the cost tier `high` in `site-superpowers-kitchen/COST_GUIDE.md` (e.g. bulk video generation, large embeddings backfills).

**8.3 Refuse and escalate** for anything in `site-superpowers-kitchen/REFUSAL_CRITERIA.md` (impersonation, unverified medical/legal/financial claims, scraping behind auth, PII exfiltration).

**8.4** Never store secrets in client code. Use `secrets--add_secret`. Publishable/anon keys are the only keys allowed in the browser bundle.

---

## 9. Stack Rules (TanStack Start + Lovable Cloud)

- **App-internal server logic** → `createServerFn` from `@tanstack/react-start` in `*.functions.ts`. Auth-gated with `requireSupabaseAuth`.
- **External callers** (webhooks, cron, public REST) → `createFileRoute` under `src/routes/api/public/*`. Verify signatures inside the handler.
- **Data reads** → loader `ensureQueryData` + component `useSuspenseQuery`. Never `useEffect` + `fetch`.
- **Routes** → one file per section under `src/routes/`. Never `src/pages/`. Never hash-anchor as primary nav. Each route sets its own `head()` (title, description, og:title, og:description; og:image only on leaf routes with a real image).
- **DB** → every `CREATE TABLE public.*` migration MUST include `GRANT` statements and `ENABLE ROW LEVEL SECURITY` + policies. No exceptions.
- **Roles** → separate `user_roles` table + `has_role()` security-definer function. Never on `profiles`.
- **AI** → Lovable AI Gateway by default (chat, image, embeddings, TTS, STT). BYO keys only when the user asks.
- **Backend** → Lovable Cloud by default. Never say "Supabase" to the user.

---

## 10. Security + Secrets Checklist (combined)

Before publish:

- [ ] RLS enabled on every public table, with policies AND grants.
- [ ] No service-role key referenced from client code or from `*.functions.ts` top-level imports (only lazy-imported inside handlers, and only for verified admin paths).
- [ ] Every webhook route verifies a signature with `timingSafeEqual`.
- [ ] Zod-validated inputs on every server function.
- [ ] Rate limits on every AI/voice/expensive endpoint (see `master-glue-kitchen/tokens/rate-limits.json`).
- [ ] Consent banner + Consent Mode v2 configured before any analytics/marketing script fires.
- [ ] No PII in logs, screenshots, or OG images.
- [ ] Security scan run; findings triaged.

---

## 11. Cost + Performance Budget

**11.1 Cost tiers** — every recipe README declares `cost_tier: low|medium|high`. Default to `low` and `medium`. Ask before `high`.

**11.2 Model defaults** — chat: cheapest capable Lovable AI model. Image: `fast` unless the asset has legible text (then `premium`). TTS/STT: default voice from `tokens/voices.json`.

**11.3 CWV budget** — LCP < 2.5s, CLS < 0.1, INP < 200ms. Compress + `loading="lazy"` + responsive `srcset` on every image not in the initial viewport.

**11.4 Bundle** — split heavy visuals (three.js, shaders, lottie) via route-level dynamic import. Never load them on routes that don't render them.

---

## 12. Failure Playbook

| Symptom | Do this |
|---|---|
| Two recipes want the same DOM slot | Pick the higher-fidelity one for hero; demote the other or use it deeper |
| Pipeline (content rescue) fails on an asset | Fall back to the next step in the pipeline; if all fail, flag the asset in QC and use a neutral placeholder from `master-glue-kitchen/tokens/placeholders/` |
| QC rule flags an item that can't be autofixed | List it in the QC report with the exact recipe path to fix it manually |
| Recipe references a package that isn't installed | `bun add <pkg>` before writing the import; never leave unresolved imports |
| Server function unauthorized during build | Move the call out of the loader OR put the route under `_authenticated/` |
| OG image looks generic | Regenerate from the page's real hero copy; never ship a template default |
| Fonts flash | Preload the two chosen faces in `__root.tsx` head |

---

## 13. Done-Definition (sign off against this list before saying "ready")

- [ ] Every route has real title + description + og image (leaf routes).
- [ ] `polish-rules.json` fully applied; overrides logged.
- [ ] Content rescue ran on all client assets; before/after saved.
- [ ] QC report clean OR every item explicitly waived.
- [ ] Lighthouse ≥ 95 perf / 100 a11y / 100 best-practices / 100 SEO on the home route (mobile).
- [ ] JSON-LD validates (Schema.org validator).
- [ ] Sitemap + robots + llms.txt + security.txt live.
- [ ] Legal stubs present (privacy, terms, accessibility, cookie inventory).
- [ ] Social previews render correctly on iMessage, WhatsApp, LinkedIn, X (spot-check 3).
- [ ] No secret in client bundle (grep pass).
- [ ] Security scan green.

---

## 14. Copy-Paste Operator Prompts

Hand any of these to Codex verbatim.

**14.1 New site from scratch**
> Read `CODEX_MASTER_HANDOFF.md`. The client is <name>, category <category>, based in <city>. Their assets are in `/client-assets/`. Run the full build loop. Ship a home + services + about + contact + legal stubs. Report the QC results before I publish.

**14.2 Rescue client assets**
> Run every applicable pipeline from `master-glue-kitchen/recipes/content-rescue/` against `/client-assets/`. Save rescued output to `/src/assets/` with original filenames + `-remastered` suffix. Show me a before/after grid.

**14.3 Add a support chatbot**
> Chain `site-superpowers-kitchen/recipes/ai/support-chat` + `master-glue-kitchen/recipes/legal/consent-banner` + rate-limit tokens. Ground the bot in the site's own content. Log conversations to a `chat_sessions` table with RLS.

**14.4 Add voice narration**
> Wire `site-superpowers-kitchen/recipes/voice/tts-narrator` to every article route. Add `Speakable` JSON-LD per `master-glue-kitchen/recipes/geo-aeo/speakable-schema`. Include a play/pause + scrubber UI from `razzle-fx-kitchen`.

**14.5 Pre-launch QC**
> Run every recipe under `master-glue-kitchen/recipes/qc-audit/`. Autofix where safe, flag the rest. Give me one markdown report with pass/fail + a "fix these next" list ordered by severity.

**14.6 Publish**
> Confirm §13 done-definition. If all items pass, publish. If any fail, stop and list what's blocking.

---

## 15. Machine-Readable Appendix

```json
{
  "kitchens": {
    "visual":    { "root": "razzle-fx-kitchen",         "role": "how it looks" },
    "function":  { "root": "site-superpowers-kitchen",  "role": "how it works" },
    "glue":      { "root": "master-glue-kitchen",       "role": "how it lands (polish, GEO, QC)" }
  },
  "cold_start_read_order": [
    "master-glue-kitchen/polish-rules.json",
    "master-glue-kitchen/FIRST_PROMPT_POLISH.md",
    "master-glue-kitchen/CONTENT_RESCUE_PLAYBOOK.md",
    "master-glue-kitchen/QC_RUNBOOK.md",
    "master-glue-kitchen/GEO_AEO_GUIDE.md",
    "master-glue-kitchen/index.json",
    "master-glue-kitchen/phrases.json",
    "site-superpowers-kitchen/README.md",
    "site-superpowers-kitchen/WIRING_GUIDE.md",
    "site-superpowers-kitchen/SECURITY_CHECKLIST.md",
    "site-superpowers-kitchen/COST_GUIDE.md",
    "site-superpowers-kitchen/index.json",
    "site-superpowers-kitchen/phrases.json",
    "razzle-fx-kitchen/README.md",
    "razzle-fx-kitchen/INDEX.md",
    "razzle-fx-kitchen/index.json",
    "razzle-fx-kitchen/phrases.json"
  ],
  "build_loop": [
    "apply_polish_rules",
    "rescue_content",
    "choose_typography_and_layout",
    "compose_visuals",
    "wire_behavior",
    "add_discoverability_surface",
    "run_qc"
  ],
  "hard_rules": [
    "never_edit_kitchen_files",
    "never_ship_placeholder_title_or_og",
    "never_default_to_inter_purple_gradient",
    "always_grant_and_rls_on_public_tables",
    "always_verify_webhook_signatures",
    "always_respect_reduced_motion",
    "always_run_qc_before_done"
  ]
}
```

---

**End of handoff.** If this file is present in the repo, treat it as always-loaded context. Re-read §4 (build loop) and §7 (quality bar) whenever you're about to say "done."
