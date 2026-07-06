import { createServerFn } from "@tanstack/react-start";
/** Server fn for `ws-live-polls`. */
export const ws_live_polls_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "ws-live-polls" }));
