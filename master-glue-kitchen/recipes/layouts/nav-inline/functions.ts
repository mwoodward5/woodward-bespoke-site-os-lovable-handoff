import { createServerFn } from "@tanstack/react-start";
/** Server fn for `nav-inline` — layouts recipe. */
export const nav_inline_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "nav-inline", cat: "layouts" }));
