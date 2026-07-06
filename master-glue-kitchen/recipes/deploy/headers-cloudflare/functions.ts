import { createServerFn } from "@tanstack/react-start";
/** Server fn for `headers-cloudflare` — deploy recipe. */
export const headers_cloudflare_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "headers-cloudflare", cat: "deploy" }));
