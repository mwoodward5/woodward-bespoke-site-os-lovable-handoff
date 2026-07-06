import { createServerFn } from "@tanstack/react-start";
/** Server fn for `camera-parallax` — immersive recipe. */
export const camera_parallax_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "camera-parallax", cat: "immersive" }));
