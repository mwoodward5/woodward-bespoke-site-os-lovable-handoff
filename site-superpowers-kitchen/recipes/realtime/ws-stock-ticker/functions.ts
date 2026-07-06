import { createServerFn } from "@tanstack/react-start";
/** Server fn for `ws-stock-ticker`. */
export const ws_stock_ticker_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "ws-stock-ticker" }));
