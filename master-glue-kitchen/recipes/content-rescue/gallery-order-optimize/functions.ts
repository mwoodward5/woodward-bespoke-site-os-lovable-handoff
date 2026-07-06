import { createServerFn } from "@tanstack/react-start";
/** Server fn for `gallery-order-optimize` — content-rescue recipe. */
export const gallery_order_optimize_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "gallery-order-optimize", cat: "content-rescue" }));
