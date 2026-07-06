import { createServerFn } from "@tanstack/react-start";
/** Server fn for `service-page-rewrite` — content-extraction recipe. */
export const service_page_rewrite_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "service-page-rewrite", cat: "content-extraction" }));
