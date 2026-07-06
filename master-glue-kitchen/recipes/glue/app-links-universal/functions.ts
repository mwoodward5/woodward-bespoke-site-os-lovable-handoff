import { createServerFn } from "@tanstack/react-start";
/** Server fn for `app-links-universal` — glue recipe. */
export const app_links_universal_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "app-links-universal", cat: "glue" }));
