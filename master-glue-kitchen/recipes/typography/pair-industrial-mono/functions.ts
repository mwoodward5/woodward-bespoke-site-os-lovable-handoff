import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pair-industrial-mono` — typography recipe. */
export const pair_industrial_mono_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pair-industrial-mono", cat: "typography" }));
