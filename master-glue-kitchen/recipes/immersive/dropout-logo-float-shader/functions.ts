import { createServerFn } from "@tanstack/react-start";
/** Server fn for `dropout-logo-float-shader` — immersive recipe. */
export const dropout_logo_float_shader_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "dropout-logo-float-shader", cat: "immersive" }));
