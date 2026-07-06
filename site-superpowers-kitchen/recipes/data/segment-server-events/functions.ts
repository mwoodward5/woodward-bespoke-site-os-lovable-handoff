import { createServerFn } from "@tanstack/react-start";
/** Server fn for `segment-server-events`. */
export const segment_server_events_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "segment-server-events" }));
