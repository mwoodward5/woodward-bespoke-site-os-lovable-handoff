import { createServerFn } from "@tanstack/react-start";
/** Server fn for `compared-to-x-page` — geo-aeo recipe. */
export const compared_to_x_page_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "compared-to-x-page", cat: "geo-aeo" }));
