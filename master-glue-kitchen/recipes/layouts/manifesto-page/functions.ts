import { createServerFn } from "@tanstack/react-start";
/** Server fn for `manifesto-page` — layouts recipe. */
export const manifesto_page_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "manifesto-page", cat: "layouts" }));
