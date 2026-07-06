import { createServerFn } from "@tanstack/react-start";
/** Server fn for `redirects-netlify` — deploy recipe. */
export const redirects_netlify_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "redirects-netlify", cat: "deploy" }));
