import { createServerFn } from "@tanstack/react-start";
/** Server fn for `footer-mini` — layouts recipe. */
export const footer_mini_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "footer-mini", cat: "layouts" }));
