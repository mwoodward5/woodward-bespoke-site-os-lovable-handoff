# CA Landscape Hero Shape Repair - 2026-07-06

## Problem

The five preview sites were using one repeated hero media anatomy:
`stage -> frame one -> frame two -> badge row`.

Theme colors and border-radius changed, but the core tile shape still felt cloned.

## Repair

Replaced the generic hero stage with five separate compositions:

- Landscape Connection: `garden-crest` arched estate media, orbit ring, rating cue, botanical chips.
- AJP Landscape: `blueprint-stack` plan-board grid, angled sheet, measure rail, stacked service pills.
- Barriga Landscaping: `sunlit-scrapbook` paper collage, taped note card, stamp strip, friendly yard-care media.
- Signature Landscape: `coastal-atlas` wide atlas ribbon, rounded vertical image, contour line, coastal tags.
- Richard Diaz Landscape: `material-yard` masonry slab geometry, diagonal material panels, stone labels.

## Live Proof

- Kitchen gate: passed.
- Vercel aliases: redeployed.
- Smoke: home/source/package/video assets passed.
- Map routes: satellite iframe, directions link, and pin lists passed on all five.
- Desktop/mobile screenshots: refreshed in `screenshots/`.

## Honest Status

The repeated hero-card root failure is fixed. The next A+ pass should focus on richer real media, better GBP/source-photo recovery for weak businesses, and finer per-site motion details.
