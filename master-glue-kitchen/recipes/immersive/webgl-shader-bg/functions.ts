import { createServerFn } from "@tanstack/react-start";
/** Server fn for `webgl-shader-bg` — immersive recipe. */
export const webgl_shader_bg_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "webgl-shader-bg", cat: "immersive" }));
