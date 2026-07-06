import { createServerFn } from "@tanstack/react-start";
/** Server fn for `headers-vercel` — deploy recipe. */
export const headers_vercel_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "headers-vercel", cat: "deploy" }));
