import { createServerFn } from "@tanstack/react-start";
/** Server fn for `chart-sparkline`. */
export const chart_sparkline_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "chart-sparkline" }));
