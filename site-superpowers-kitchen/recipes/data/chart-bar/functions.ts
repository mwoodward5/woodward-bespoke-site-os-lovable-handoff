import { createServerFn } from "@tanstack/react-start";
/** Server fn for `chart-bar`. */
export const chart_bar_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "chart-bar" }));
