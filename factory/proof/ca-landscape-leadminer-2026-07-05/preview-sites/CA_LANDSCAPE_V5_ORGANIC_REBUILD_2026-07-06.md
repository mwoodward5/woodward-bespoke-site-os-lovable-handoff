# CA Landscape V5 Organic Rebuild

Generated: 2026-07-06 PT

## What Changed

- Rewired the CA landscape generator to use seeded organic hero masks from `factory/lib/hero-seed.mjs`.
- Added a v5 organic design layer that changes logo scale, nav weight, hero geometry, image masks, section rhythm, and CTA styling by theme.
- Added explicit homepage markers: `data-visual-grade="v5-organic"` and `data-kitchen-stack="three-kitchen-v5"`.
- Strengthened the live smoke test so it now fails if a homepage loses the v5 marker, loses the three-kitchen marker, loses the seeded organic mask, repeats a hero-stage signature, or exposes banned internal copy.
- Redeployed all five Vercel aliases and captured fresh desktop/mobile screenshots.

## Live Sites

- Landscape Connection: https://wss-ca-landscape-landscape-connection-inc.vercel.app
- AJP Landscape: https://wss-ca-landscape-ajp-landscape-inc.vercel.app
- Barriga Landscaping: https://wss-ca-landscape-barriga-landscaping.vercel.app
- Signature Landscape: https://wss-ca-landscape-signature-landscape.vercel.app
- Richard Diaz Landscape: https://wss-ca-landscape-richard-diaz-landscape.vercel.app

## Proof

- Kitchen gate: `pnpm gate:kitchens` passed.
- Generator: `pnpm build:ca-landscape` passed.
- Vercel deploys: `CA_LANDSCAPE_DEPLOYMENTS_2026-07-06-V5-ORGANIC.json`.
- Live smoke: `pnpm smoke:ca-landscape` passed.
- Screenshots: `preview-sites/screenshots/*-desktop.png` and `*-mobile.png`.

## Current Honest Bar

This is a real engine-level improvement, not a one-off repaint. The batch now has five unique hero-stage signatures:

- `garden-crest`
- `blueprint-stack`
- `sunlit-scrapbook`
- `coastal-atlas`
- `material-yard`

Remaining A+ gap: asset depth is still limited for businesses where source sites were 403/404/missing. The next quality jump is better Firecrawl/GBP/photo enrichment plus true generated motion assets per business, not another CSS-only pass.
