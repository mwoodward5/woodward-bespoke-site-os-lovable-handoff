import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pair-monospace-multiplex` — typography recipe. */
export const pair_monospace_multiplex_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pair-monospace-multiplex", cat: "typography" }));
