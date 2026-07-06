import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-404-page` — polish-rules recipe. */
export const always_404_page_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-404-page", cat: "polish-rules" }));
