import { createServerFn } from "@tanstack/react-start";
/** Server fn for `perf-critical-css`. */
export const perf_critical_css_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "perf-critical-css" }));
