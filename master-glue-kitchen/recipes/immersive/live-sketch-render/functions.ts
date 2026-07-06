import { createServerFn } from "@tanstack/react-start";
/** Server fn for `live-sketch-render` — immersive recipe. */
export const live_sketch_render_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "live-sketch-render", cat: "immersive" }));
