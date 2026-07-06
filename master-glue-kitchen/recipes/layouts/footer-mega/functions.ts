import { createServerFn } from "@tanstack/react-start";
/** Server fn for `footer-mega` — layouts recipe. */
export const footer_mega_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "footer-mega", cat: "layouts" }));
