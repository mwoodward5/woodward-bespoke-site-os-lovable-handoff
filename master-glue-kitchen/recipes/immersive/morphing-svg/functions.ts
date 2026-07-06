import { createServerFn } from "@tanstack/react-start";
/** Server fn for `morphing-svg` — immersive recipe. */
export const morphing_svg_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "morphing-svg", cat: "immersive" }));
