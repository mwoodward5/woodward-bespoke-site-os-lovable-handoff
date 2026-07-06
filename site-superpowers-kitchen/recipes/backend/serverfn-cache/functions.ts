import { createServerFn } from "@tanstack/react-start";
/** Server fn for `serverfn-cache`. */
export const serverfn_cache_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "serverfn-cache" }));
