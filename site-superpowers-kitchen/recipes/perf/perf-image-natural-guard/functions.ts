import { createServerFn } from "@tanstack/react-start";
/** Server fn for `perf-image-natural-guard`. */
export const perf_image_natural_guard_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "perf-image-natural-guard" }));
