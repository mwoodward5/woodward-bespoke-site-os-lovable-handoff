import { createServerFn } from "@tanstack/react-start";
/** Server fn for `ws-live-counter`. */
export const ws_live_counter_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "ws-live-counter" }));
