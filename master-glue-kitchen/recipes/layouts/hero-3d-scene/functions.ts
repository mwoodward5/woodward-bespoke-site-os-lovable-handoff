import { createServerFn } from "@tanstack/react-start";
/** Server fn for `hero-3d-scene` — layouts recipe. */
export const hero_3d_scene_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "hero-3d-scene", cat: "layouts" }));
