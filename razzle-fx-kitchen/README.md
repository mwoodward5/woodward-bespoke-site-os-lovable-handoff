# Razzle Dazzle FX Kitchen

A framework-agnostic library of 600 UI recipes, 48 token files, 64 composed hero
examples, and 1000 phrase→recipe mappings. Every recipe ships:

- `component.tsx` — React + Tailwind v4 drop-in
- `snippet.html` — zero-JS HTML/CSS
- `styles.css` — the actual effect
- `variants.md` — tuning knobs
- `preview.png` — 1200×750 poster
- `README.md` — what/when/avoid + phrases that trigger it

All animations honor `prefers-reduced-motion`.
All image effects assume `naturalWidth > 0` before rendering.
No AI-generated faces or mouths anywhere.

## Install
Copy this folder into your project. That's it. Import a component:

```tsx
import { RfxShimmerSweep } from "./razzle-fx-kitchen/recipes/logos/shimmer-sweep/component";
```

Or drop the vanilla snippet:

```html
<link rel="stylesheet" href="./razzle-fx-kitchen/recipes/backgrounds/aurora-mesh/styles.css">
<section class="rfx-aurora-mesh"><div class="rfx-aurora-mesh__inner">Hi</div></section>
```
