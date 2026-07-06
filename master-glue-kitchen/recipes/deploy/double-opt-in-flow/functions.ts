import { createServerFn } from "@tanstack/react-start";
/** Server fn for `double-opt-in-flow` — deploy recipe. */
export const double_opt_in_flow_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "double-opt-in-flow", cat: "deploy" }));
