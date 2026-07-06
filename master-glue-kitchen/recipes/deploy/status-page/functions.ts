import { createServerFn } from "@tanstack/react-start";
/** Server fn for `status-page` — deploy recipe. */
export const status_page_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "status-page", cat: "deploy" }));
