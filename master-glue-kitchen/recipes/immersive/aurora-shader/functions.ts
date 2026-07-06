import { createServerFn } from "@tanstack/react-start";
/** Server fn for `aurora-shader` — immersive recipe. */
export const aurora_shader_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "aurora-shader", cat: "immersive" }));
