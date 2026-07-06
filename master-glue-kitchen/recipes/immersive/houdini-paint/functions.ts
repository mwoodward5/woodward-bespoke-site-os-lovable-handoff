import { createServerFn } from "@tanstack/react-start";
/** Server fn for `houdini-paint` — immersive recipe. */
export const houdini_paint_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "houdini-paint", cat: "immersive" }));
