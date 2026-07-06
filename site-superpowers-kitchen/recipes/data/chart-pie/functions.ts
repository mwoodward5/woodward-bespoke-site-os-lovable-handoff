import { createServerFn } from "@tanstack/react-start";
/** Server fn for `chart-pie`. */
export const chart_pie_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "chart-pie" }));
