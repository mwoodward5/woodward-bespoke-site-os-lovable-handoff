# FIRST PROMPT POLISH — the glue

On every new site build, the agent MUST:

1. Read `polish-rules.json` at the start of the turn.
2. For every rule marked `unprompted: true`, check the current project state against the rule's `when` clause.
3. If matched AND the user has not said the rule's `override_phrase`, apply the fix via the referenced recipe.
4. Log every applied rule to `/mnt/documents/polish-report.md` for the user to review.

## What "polish" covers on the first turn
- Title + description (never placeholder)
- Full favicon set (12 files) + manifest + splash screens
- Sitemap.xml, robots.txt, security.txt, humans.txt, llms.txt
- Open Graph image + Twitter card + per-page share metadata
- 404 page, offline shell, loading + empty + error state per surface
- Reduced motion, skip link, focus ring, keyboard-only nav
- Print stylesheet
- Consent banner + privacy stub + terms stub
- Contrast audit + alt-text sweep + dedupe photos + gallery aspect harmonize
- JSON-LD (Organization at minimum; page-appropriate on leaves)
- `canonical` + `og:url` self-referential per page

## Content-rescue triggers
When the client supplies:
- **Any raster photo** → run `recipes/content-rescue/photo-*` pipeline (upscale if <1600px, denoise, color-grade, smart-crop, focal detect, emit LQIP+BlurHash).
- **A logo raster** → run `logo-vectorize` + `logo-padding-normalize` + generate 3 lockups + generate favicon set.
- **A gallery of mixed photos** → run `gallery-aspect-harmonize` + `gallery-tone-unify` + `gallery-dedupe-perceptual` before rendering.
- **A single paragraph** → run `content-extraction/bio-to-full-page` before generating routes.

## Refusal
If the user says any override phrase (e.g. "skip og image", "skip favicon set"), skip that rule and note the skip in the polish report.
