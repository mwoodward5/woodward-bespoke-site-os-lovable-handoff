import { createServerFn } from "@tanstack/react-start";
/** Server fn for `perf-cwv-monitor`. */
export const perf_cwv_monitor_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "perf-cwv-monitor" }));
