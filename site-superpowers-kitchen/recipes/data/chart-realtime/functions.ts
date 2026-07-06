import { createServerFn } from "@tanstack/react-start";
/** Server fn for `chart-realtime`. */
export const chart_realtime_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "chart-realtime" }));
