import { createServerFn } from "@tanstack/react-start";
/** Server fn for `about-us-rewrite` — content-extraction recipe. */
export const about_us_rewrite_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "about-us-rewrite", cat: "content-extraction" }));
