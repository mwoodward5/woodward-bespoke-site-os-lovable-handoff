import { createServerFn } from "@tanstack/react-start";
/** Server fn for `perf-http-cache`. */
export const perf_http_cache_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "perf-http-cache" }));
