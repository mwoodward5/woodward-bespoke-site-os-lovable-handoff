import { createServerFn } from "@tanstack/react-start";
/** Server fn for `perf-prefetch`. */
export const perf_prefetch_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "perf-prefetch" }));
