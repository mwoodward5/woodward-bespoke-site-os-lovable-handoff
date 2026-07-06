import { createServerFn } from "@tanstack/react-start";
/** Server fn for `perf-defer-scripts`. */
export const perf_defer_scripts_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "perf-defer-scripts" }));
