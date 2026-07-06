import { createServerFn } from "@tanstack/react-start";
/** Server fn for `search-vector`. */
export const search_vector_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "search-vector" }));
