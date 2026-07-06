import { createServerFn } from "@tanstack/react-start";
/** Server fn for `headers-netlify` — deploy recipe. */
export const headers_netlify_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "headers-netlify", cat: "deploy" }));
