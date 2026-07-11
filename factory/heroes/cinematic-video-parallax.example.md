# Reference: Hero family renderer

The 6 hero families under `factory/templates/hero/` all follow this shape.
Below is `cinematic-video-parallax.tsx` as the canonical example. The other
5 differ only in layout logic (content placement, media shape, widget) —
never in the 8-layer anatomy count.

```tsx
import { seedFrom, blobToPath } from "@/factory/lib/hero-seed";
import { MotifBotanical } from "@/factory/heroes/motifs/botanical-contour";
import { YardageEstimator } from "@/factory/templates/widgets/YardageEstimator";
import { CountUp } from "@/factory/templates/atoms/CountUp";
import { Marquee } from "@/factory/templates/atoms/Marquee";
import { HeaderLogo } from "@/factory/templates/atoms/HeaderLogo";

export function HeroCinematicVideoParallax({ packet }) {
  const seed = seedFrom(packet.slug, packet.business.category);
  const blob = blobToPath(seed.blobPoints);
  const palette = packet.enrichment_sources?.branding?.value?.colors ?? {};
  const veoStillOrVideo = packet.media?.hero_video_url ?? packet.media?.hero_still_url;

  return (
    <section
      className="relative isolate min-h-[100svh] overflow-hidden text-white"
      style={{
        background: palette.background ?? "#0f1310",
        // palette hue rotation from seed — never hardcoded
        filter: `hue-rotate(${seed.hueRotate}deg)`,
      }}
    >
      {/* Layer 1 — media plane, mask-shaped via seeded blob */}
      <svg className="absolute inset-0 -z-10 h-full w-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        <defs>
          <clipPath id="blob"><path d={blob} /></clipPath>
        </defs>
        <foreignObject width="1000" height="1000" clipPath="url(#blob)">
          {veoStillOrVideo?.endsWith(".mp4") ? (
            <video src={veoStillOrVideo} autoPlay loop muted playsInline poster={packet.media?.hero_still_url} />
          ) : (
            <img src={veoStillOrVideo} alt="" />
          )}
        </foreignObject>
      </svg>

      {/* Layer 2 — gradient veil */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: `linear-gradient(180deg, transparent 40%, ${palette.background ?? "#0f1310"} 100%)` }}
      />

      {/* Layer 3 — SVG grain */}
      <svg className="pointer-events-none absolute inset-0 -z-10 opacity-30 mix-blend-overlay" aria-hidden>
        <filter id="g"><feTurbulence baseFrequency="0.85" numOctaves="2" /></filter>
        <rect width="100%" height="100%" filter="url(#g)" />
      </svg>

      {/* Layer 4 — trade motif overlay, placed by seeded quadrant */}
      <MotifBotanical quadrant={seed.motifQuadrant} scale={seed.motifScale} />

      {/* Header with 76px logo */}
      <header className="relative flex items-center justify-between p-6">
        <HeaderLogo src={packet.logo_source?.remastered_path ?? packet.logo_source?.url} size={76} alt={packet.business.name} />
        <nav>{/* ... */}</nav>
      </header>

      {/* Layer 5 — kinetic headline, per-word reveal, seed cadence */}
      <div className={`grid grid-cols-12 gap-6 px-6 lg:px-12 lg:col-span-${seed.headlineCols}`}>
        {/* headline component with motion-reduce fallback */}
      </div>

      {/* Layer 6 — live widget */}
      <YardageEstimator />

      {/* Layer 7 — count-ups (stats sourced from enrichment_sources ONLY) */}
      {/* Layer 8 — marquee of services + service areas */}
      <Marquee items={packet.enrichment_sources?.services?.value ?? []} />
    </section>
  );
}
```

Rules per family:
1. All 8 layers present. Missing = QC fail.
2. `seed` values drive positions — never hardcode.
3. Motif comes from `factory/heroes/motifs/<motif>.tsx` (trade-specific).
4. Logo prop: `size={76}` (72–80 range).
5. Widget is family-specific: Cinematic → YardageEstimator, Split →
   ProjectIndex, ServiceMap → MapPicker, MaterialLab → SwatchGrid,
   Magazine → OwnerLetter, Atlas → AtlasGrid.
6. Every animation has a `motion-reduce:` variant.
