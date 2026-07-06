import { createServerFn } from "@tanstack/react-start";
/** Server fn for `shimmer-logo-shader` — immersive recipe. */
export const shimmer_logo_shader_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "shimmer-logo-shader", cat: "immersive" }));
