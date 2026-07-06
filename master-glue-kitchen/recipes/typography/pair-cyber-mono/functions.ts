import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pair-cyber-mono` — typography recipe. */
export const pair_cyber_mono_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pair-cyber-mono", cat: "typography" }));
