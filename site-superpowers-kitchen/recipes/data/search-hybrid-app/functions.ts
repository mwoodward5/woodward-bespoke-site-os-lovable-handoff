import { createServerFn } from "@tanstack/react-start";
/** Server fn for `search-hybrid-app`. */
export const search_hybrid_app_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "search-hybrid-app" }));
