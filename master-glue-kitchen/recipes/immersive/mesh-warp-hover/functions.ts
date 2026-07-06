import { createServerFn } from "@tanstack/react-start";
/** Server fn for `mesh-warp-hover` — immersive recipe. */
export const mesh_warp_hover_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "mesh-warp-hover", cat: "immersive" }));
