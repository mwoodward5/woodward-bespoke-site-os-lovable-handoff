# Woodward Workspace Design Rule

All public Woodward-owned Vercel surfaces in this workspace must start from the
bespoke product-design standard, not from internal proof-board layouts.

Before coding a public page, define the product category, audience, visual
metaphor, type system, palette, logo/mark, icon language, hero/media asset, and
signature components. If any of those are missing, create them.

Do not expose old client-context, PageHub/Ricardo framing, migration notes,
fulfillment proof vocabulary, or internal audit-board copy as the public sales
experience. Keep that material in private handoff files and route public pages
to clean Woodward-owned product language.

Use:
`C:\Users\Main\Documents\New project 2\perplexity-product-audit-2026-06-30\WOODWARD_BESPOKE_WEB_STANDARD_2026.md`

Use this local skill for public-page typography, motion, media, visual effects,
Lovable/Figma-style polish, and donor-code mining:
`C:\Users\Main\.codex\skills\premium-web-design-systems\SKILL.md`

Hard visual bans for public pages:

- Giant glass cards around every section.
- Hero type that crushes the viewport.
- Generic dark-blue admin dashboards.
- Empty gradient backgrounds with no real visual asset.
- Weak initials-only logos when a product wordmark or mark is needed.
- Decorative charts that do not explain the product.
- Repetitive card grids as the whole page.

Public pages should look like premium 2026 SaaS/product design before they are
called live.

## Three-Kitchen Default Web Build System

For any Woodward-owned web page, Vercel deployment, Lovable handoff, local
business preview site, product shell, SaaS dashboard, report, deck, or demo in
this workspace, treat the three-kitchen build system as always-on default
context. This is not optional inspiration.

Required repo-root libraries:

- `C:\Users\Main\Documents\New project 2\razzle-fx-kitchen`
- `C:\Users\Main\Documents\New project 2\site-superpowers-kitchen`
- `C:\Users\Main\Documents\New project 2\master-glue-kitchen`
- `C:\Users\Main\Documents\New project 2\codex-master-handoff\codex-handoff\CODEX_MASTER_HANDOFF.md`

Before touching code for any public web surface:

1. Confirm all three kitchen folders exist at the workspace root.
2. Read `CODEX_MASTER_HANDOFF.md`, especially §4 and §13.
3. Read `master-glue-kitchen/FIRST_PROMPT_POLISH.md`.
4. Read `master-glue-kitchen/polish-rules.json`.
5. Fuzzy-match the user request against all three `phrases.json` files.
6. Load the matching kitchen recipes before writing custom CSS/components.

Mandatory build loop for every local or Vercel web build:

- Apply every unprompted rule in `master-glue-kitchen/polish-rules.json`.
- Run content rescue before placing photos, logos, PDFs, CSVs, reviews, or
  testimonials in a layout.
- Choose typography from `master-glue-kitchen/recipes/typography/` or
  `master-glue-kitchen/tokens/font-pairs.json`, and layout from
  `master-glue-kitchen/recipes/layouts/`.
- Compose hero, motion, transitions, media frames, and visual effects from
  `razzle-fx-kitchen`.
- Wire behavior from `site-superpowers-kitchen` when the page needs chat,
  voice, forms, auth, payments, realtime, search, or server routes.
- Add GEO/AEO, local SEO, social previews, favicons, manifest, sitemap, robots,
  security.txt, legal stubs, reduced-motion support, and accessibility basics
  from `master-glue-kitchen`.
- Run the QC audit before shipping.

Hard failure gates:

- Do not say "done", "ready", "live", or "polished" until the §13
  done-definition in `CODEX_MASTER_HANDOFF.md` has been checked.
- Do not ship a local-business or premium product hero without real media.
  Static images are acceptable only when no video/cinemagraph asset exists, and
  that limitation must be reported.
- Do not use screenshot thumbnails as the main art unless the brief is
  specifically about an app/dashboard screenshot.
- Do not let thick all-bold typography become the default. Buttons, nav,
  cards, captions, and body text need their own deliberate styles.
- Do not reuse one hero anatomy across a batch of sites. Each site needs a
  different layout gravity, media behavior, typography rhythm, and section
  cadence.
- Do not leave placeholder route-card galleries, generic service-card copy, or
  "owner will provide assets later" language on a public-facing preview.

If a page still looks generic after a pass, stop and report the exact failed
gate instead of calling it finished.
