import { createServerFn } from "@tanstack/react-start";
/** Server fn for `chart-area`. */
export const chart_area_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "chart-area" }));
