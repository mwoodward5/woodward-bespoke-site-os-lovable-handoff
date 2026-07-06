import { createServerFn } from "@tanstack/react-start";
/** Server fn for `redirects-cloudflare` — deploy recipe. */
export const redirects_cloudflare_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "redirects-cloudflare", cat: "deploy" }));
