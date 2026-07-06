import { createServerFn } from "@tanstack/react-start";
/** Server fn for `shader-halftone` — immersive recipe. */
export const shader_halftone_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "shader-halftone", cat: "immersive" }));
