import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pay-price-table`. */
export const pay_price_table_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pay-price-table" }));
