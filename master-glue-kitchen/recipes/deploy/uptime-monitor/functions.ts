import { createServerFn } from "@tanstack/react-start";
/** Server fn for `uptime-monitor` — deploy recipe. */
export const uptime_monitor_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "uptime-monitor", cat: "deploy" }));
