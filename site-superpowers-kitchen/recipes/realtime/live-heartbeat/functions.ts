import { createServerFn } from "@tanstack/react-start";
/** Server fn for `live-heartbeat`. */
export const live_heartbeat_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "live-heartbeat" }));
