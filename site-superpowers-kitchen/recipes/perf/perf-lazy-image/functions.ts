import { createServerFn } from "@tanstack/react-start";
/** Server fn for `perf-lazy-image`. */
export const perf_lazy_image_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "perf-lazy-image" }));
