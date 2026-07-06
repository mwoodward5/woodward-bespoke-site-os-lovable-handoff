import { createServerFn } from "@tanstack/react-start";
/** Server fn for `liquid-mesh-anim` — immersive recipe. */
export const liquid_mesh_anim_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "liquid-mesh-anim", cat: "immersive" }));
