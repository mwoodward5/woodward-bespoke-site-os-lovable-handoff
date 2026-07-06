import { createServerFn } from "@tanstack/react-start";
/** Server fn for `perf-font-subset`. */
export const perf_font_subset_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "perf-font-subset" }));
