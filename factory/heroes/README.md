# Hero Families

Each family is a layout-logic contract, not a style swap. The renderer in
`factory/templates/hero/<family>.tsx` composes the 8 layers of the anatomy
contract (see `engine/BUILDER_ENGINE_SPEC.md` §3), with the layout seed
(`factory/lib/hero-seed.mjs`) deciding z-order, mask shape, grid asymmetry,
motif placement, palette variance, and motion cadence.

| Family | File | Content placement | Logo scale/pos | Media shape |
|--------|------|-------------------|----------------|-------------|
| cinematic-video-parallax | `cinematic-video-parallax.tsx` | Left, oversized headline | 72–80px top-left | Full-bleed video |
| split-editorial-index | `split-editorial-index.tsx` | Right column magazine | 80px sticky sidebar | Left photo essay |
| service-map-pins | `service-map-pins.tsx` | Bottom sheet | 72px header | Interactive region map |
| material-lab-swatch | `material-lab-swatch.tsx` | Center, small | 76px header | Grid of zoomable swatches |
| magazine-owner-letter | `magazine-owner-letter.tsx` | Wide typographic block | 80px signature-adjacent | Portrait cutout right |
| atlas-grid-reveal | `atlas-grid-reveal.tsx` | 12-cell atlas | 72px header | Cell hover reveals |

## Family authoring rules

1. Consume `seed` from `hero-seed.mjs` — NEVER hardcode positions.
2. Compose from `factory/templates/hero/layers/*` (Media, Veil, Grain, Motif,
   Headline, Widget, CountUps, Marquee). Missing a layer = QC fail.
3. Motif comes from `factory/heroes/motifs/<trade>.tsx` — trade-driven,
   never generic.
4. Logo goes in `<HeaderLogo size={80}>`; QC asserts `72 ≤ computedHeight ≤ 80`.
5. Widget is family-specific and interactive: YardageEstimator,
   ServiceMapPicker, MaterialLabSwatch, QuoteTimer, etc.
6. Include `motion-reduce:` variants for every animation.
