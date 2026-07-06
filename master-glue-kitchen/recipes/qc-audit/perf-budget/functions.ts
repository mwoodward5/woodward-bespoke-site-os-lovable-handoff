import { createServerFn } from "@tanstack/react-start";
/** Server fn for `perf-budget` — qc-audit recipe. */
export const perf_budget_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "perf-budget", cat: "qc-audit" }));
