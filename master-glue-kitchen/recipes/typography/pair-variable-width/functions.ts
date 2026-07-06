import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pair-variable-width` — typography recipe. */
export const pair_variable_width_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pair-variable-width", cat: "typography" }));
