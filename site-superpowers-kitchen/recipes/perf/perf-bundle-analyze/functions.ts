import { createServerFn } from "@tanstack/react-start";
/** Server fn for `perf-bundle-analyze`. */
export const perf_bundle_analyze_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "perf-bundle-analyze" }));
