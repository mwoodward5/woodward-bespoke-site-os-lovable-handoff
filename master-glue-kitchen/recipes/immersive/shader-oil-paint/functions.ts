import { createServerFn } from "@tanstack/react-start";
/** Server fn for `shader-oil-paint` — immersive recipe. */
export const shader_oil_paint_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "shader-oil-paint", cat: "immersive" }));
