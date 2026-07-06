import { createServerFn } from "@tanstack/react-start";
/** Server fn for `glass-refraction` — immersive recipe. */
export const glass_refraction_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "glass-refraction", cat: "immersive" }));
