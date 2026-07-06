import { createServerFn } from "@tanstack/react-start";
/** Server fn for `procedural-pattern` — immersive recipe. */
export const procedural_pattern_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "procedural-pattern", cat: "immersive" }));
