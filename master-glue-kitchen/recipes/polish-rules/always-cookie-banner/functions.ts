import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-cookie-banner` — polish-rules recipe. */
export const always_cookie_banner_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-cookie-banner", cat: "polish-rules" }));
