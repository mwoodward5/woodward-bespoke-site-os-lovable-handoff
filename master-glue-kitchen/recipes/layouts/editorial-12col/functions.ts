import { createServerFn } from "@tanstack/react-start";
/** Server fn for `editorial-12col` — layouts recipe. */
export const editorial_12col_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "editorial-12col", cat: "layouts" }));
