import { createServerFn } from "@tanstack/react-start";
/** Server fn for `perf-service-worker`. */
export const perf_service_worker_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "perf-service-worker" }));
