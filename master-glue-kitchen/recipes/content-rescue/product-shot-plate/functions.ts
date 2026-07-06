import { createServerFn } from "@tanstack/react-start";
/** Server fn for `product-shot-plate` — content-rescue recipe. */
export const product_shot_plate_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "product-shot-plate", cat: "content-rescue" }));
