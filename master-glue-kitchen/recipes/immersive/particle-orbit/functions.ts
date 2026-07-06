import { createServerFn } from "@tanstack/react-start";
/** Server fn for `particle-orbit` — immersive recipe. */
export const particle_orbit_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "particle-orbit", cat: "immersive" }));
