import { createServerFn } from "@tanstack/react-start";
/** Server fn for `product-shot-shadow-add` — content-rescue recipe. */
export const product_shot_shadow_add_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "product-shot-shadow-add", cat: "content-rescue" }));
