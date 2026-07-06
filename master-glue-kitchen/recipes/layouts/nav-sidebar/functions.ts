import { createServerFn } from "@tanstack/react-start";
/** Server fn for `nav-sidebar` — layouts recipe. */
export const nav_sidebar_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "nav-sidebar", cat: "layouts" }));
