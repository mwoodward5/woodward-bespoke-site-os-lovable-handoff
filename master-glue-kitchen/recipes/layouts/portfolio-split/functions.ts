import { createServerFn } from "@tanstack/react-start";
/** Server fn for `portfolio-split` — layouts recipe. */
export const portfolio_split_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "portfolio-split", cat: "layouts" }));
