import { createServerFn } from "@tanstack/react-start";
/** Server fn for `ws-sports-ticker`. */
export const ws_sports_ticker_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "ws-sports-ticker" }));
