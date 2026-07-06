import { createServerFn } from "@tanstack/react-start";
/** Server fn for `chart-heatmap`. */
export const chart_heatmap_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "chart-heatmap" }));
