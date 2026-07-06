import { createServerFn } from "@tanstack/react-start";
/** Server fn for `redirects-vercel` — deploy recipe. */
export const redirects_vercel_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "redirects-vercel", cat: "deploy" }));
