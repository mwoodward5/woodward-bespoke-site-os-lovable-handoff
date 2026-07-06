import { createServerFn } from "@tanstack/react-start";
/** Server fn for `chart-line`. */
export const chart_line_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "chart-line" }));
