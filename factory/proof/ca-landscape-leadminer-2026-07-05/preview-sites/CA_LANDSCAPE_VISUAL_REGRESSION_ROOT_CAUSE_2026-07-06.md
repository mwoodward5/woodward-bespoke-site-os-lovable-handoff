# CA Landscape Visual Regression Root Cause

Generated: 2026-07-06

## What Was Causing The Bad Look

- Two older local generators could still rebuild the CA landscape previews with initials-only marks and oversized hero type:
  - `generate-ca-landscape-preview-sites.mjs`
  - `upgrade-ca-landscape-preview-sites-premium.mjs`
- The active generator still had one oversized proof-number clamp and a public `Woodward Software Labs preview` trace.
- Some Vercel project names are long enough that Vercel auto-created shortened default aliases, so the long public URLs needed explicit alias pinning after deploy.

## What Changed

- Deprecated generators now fail fast and point agents to `apply-ca-landscape-snowflake-2026.mjs`.
- The active generator uses SVG brand glyphs instead of initials badges.
- Hero and route headline clamps were reduced before this note; proof-number type was capped in this pass.
- Richard Diaz media now prioritizes outdoor landscape/hardscape imagery over accidental interior-looking fallbacks.
- Five long Vercel aliases were explicitly repointed to the fresh deployments.

## Current Proof

- Live smoke file: `CA_LANDSCAPE_LIVE_SMOKE.json`
- Screenshot folder: `screenshots/`
- All five home/source/package routes returned `200`.
- Home pages have no package controls.
- Package pages have platform/source/package dropdown controls.
- Banned public-copy hits: `none`.

## Positioning Rule

`Ghost Agency` is an internal Woodward operating-system codename. Public customer-facing copy must sell the done-for-you local website/growth service, not a franchisable agency system.
