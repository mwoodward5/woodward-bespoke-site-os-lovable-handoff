import { createServerFn } from "@tanstack/react-start";
/** Server fn for `perf-preload-hero`. */
export const perf_preload_hero_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "perf-preload-hero" }));
