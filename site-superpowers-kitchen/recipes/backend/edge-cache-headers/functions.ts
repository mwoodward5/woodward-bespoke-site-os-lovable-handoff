import { createServerFn } from "@tanstack/react-start";
/** Server fn for `edge-cache-headers`. */
export const edge_cache_headers_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "edge-cache-headers" }));
