import { createServerFn } from "@tanstack/react-start";
/** Server fn for `ws-live-auctions`. */
export const ws_live_auctions_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "ws-live-auctions" }));
