import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pair-variable-weight` — typography recipe. */
export const pair_variable_weight_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pair-variable-weight", cat: "typography" }));
