import { createServerFn } from "@tanstack/react-start";
/** Server fn for `perf-inline-svg`. */
export const perf_inline_svg_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "perf-inline-svg" }));
