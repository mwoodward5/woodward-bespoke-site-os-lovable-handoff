import { createServerFn } from "@tanstack/react-start";
/** Server fn for `depth-cursor-parallax` — immersive recipe. */
export const depth_cursor_parallax_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "depth-cursor-parallax", cat: "immersive" }));
