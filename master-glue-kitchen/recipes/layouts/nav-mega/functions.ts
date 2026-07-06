import { createServerFn } from "@tanstack/react-start";
/** Server fn for `nav-mega` — layouts recipe. */
export const nav_mega_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "nav-mega", cat: "layouts" }));
