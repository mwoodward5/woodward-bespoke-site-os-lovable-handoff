import { createServerFn } from "@tanstack/react-start";
/** Server fn for `newsletter-double-optin` — glue recipe. */
export const newsletter_double_optin_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "newsletter-double-optin", cat: "glue" }));
