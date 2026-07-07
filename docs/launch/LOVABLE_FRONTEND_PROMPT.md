# Exact Lovable prompt — SiteForge frontend (scale-up track)

The shipped `app/` server IS the working product today. Use this prompt only when
moving the customer-facing app onto Lovable Cloud (TanStack Start) for managed
auth/DB/hosting. Paste everything below the line into a new Lovable project.
(The Lovable MCP connection currently 404s — paste via lovable.dev directly.)

---

Read `CODEX_MASTER_HANDOFF.md` at repo root first and obey it on every turn — especially §4 build loop, §7 unprompted quality bar, §9 stack rules, §13 done-definition. The three kitchens at repo root are read-only reference libraries.

Build **SiteForge by Woodward Software Labs** — a premium website-builder SaaS for local businesses. Positioning: "Type your business. We find your real content, forge a one-of-one premium website, grade it with a hard QC gate, and publish it." Flat pricing, never credits. Two front doors: (1) a template-collections gallery where a visitor forges a free personalized preview around their real business name — a true one-of-one build, never a name-swap mockup; (2) a prompt-to-site path for fully custom builds.

**Design language ("Foundry Editorial")**: warm paper (#FAF6EE), ink (#191611), ember accent (#C2571B), moss + gold support. Fraunces (display serif, optical sizing) + Archivo (UI) + a mono for data. Editorial asymmetry, thin rules, numbered micro-labels, subtle paper grain, contour-line motif, kinetic per-word hero reveal honoring prefers-reduced-motion. Hard bans (AGENTS.md): no giant glass cards, no viewport-crushing hero type, no dark-blue admin dashboard, no empty gradient backgrounds, no Inter+purple, no repetitive card-grid pages. Reference implementation for every page, component state, and copy line: `app/views/*.mjs` + `app/public/theme.css` in this repo — match or exceed it.

**Pages**: landing (hero with 20-second try-on card, watch-it-forge 5-step strip, six template collections with live demo links, before/after-the-forge comparison, pricing, FAQ, trust/legal footer with "no fabricated reviews, ever"), /templates + /templates/:family try pages, /pricing (plans + upgradable facets: AI Voice Receptionist $79, Local SEO Boost $49, AI Concierge $29 + DFY $495/$995), /login (magic link + Google), /dashboard, /new 3-step wizard (business → website+GBP URL+services → build type, goal [calls/quotes/bookings/ecommerce/portfolio], hero anatomy from the six families with "Forge's choice" default), /p/:id with tabs Overview / Import / Forge / Preview & QC / Publish, /account, /support, /legal/{privacy,terms,accessibility}, dev inbox equivalent, full empty/loading/error states everywhere.

**Backend (Lovable Cloud)**: implement `app/schema.sql` exactly (RLS + grants on every table; user_roles + has_role(); no exceptions). Server functions mirror the API contract in `docs/launch/LAUNCH_PACK.md` §5, including CSRF-safe mutations, owner checks, rate limits on try-on (6/hr/IP) and auth (8/hr/IP), and Zod validation on every input. Stripe: TEST MODE only — products from `app/config/plans.json` (lookup_keys as written); checkout.session.completed webhook with signature verification grants subscriptions/entitlements idempotently; refuse sk_live_ keys at boot.

**Forge integration**: generation runs on the external forge runner, not in Lovable. POST a ticket {intake, options} to the runner endpoint (`SITEFORGE_RUNNER_URL`, exact job/event shapes in `app/lib/engine-adapter.mjs`), stream stage events (discover→scrape→rescue→design→build→qc→deploy) into a live timeline, then render the QC report card: letter grade circle, score/100, per-check pass/fail/deferred rows, per-piece regenerate buttons (hero/copy/gallery/map). Publish is enabled ONLY when grade is A AND the plan allows publishing. Preview iframes get desktop/mobile toggle chrome.

**Honesty rules baked into UI copy**: facts render only with provenance (source + confidence shown in the Import screen); missing facts mean omitted sections, never invented ones; "Premier multi-page" is labeled as extended single-page until the engine's multi-page renderer ships; demo/try builds are watermarked + noindexed; failed forges never consume quota.

Ship with: per-route titles/descriptions/OG, favicon set, manifest, sitemap/robots/llms.txt/security.txt, 404, consent banner (essential cookies only), WCAG 2.2 AA contrast, skip links, focus rings, print styles. Run the §13 done-definition and show me the QC results before calling it ready. Lighthouse target on the landing: 95/100/100/100 mobile.
