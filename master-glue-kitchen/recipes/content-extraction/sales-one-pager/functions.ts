import { createServerFn } from "@tanstack/react-start";
/** Server fn for `sales-one-pager` — content-extraction recipe. */
export const sales_one_pager_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "sales-one-pager", cat: "content-extraction" }));
