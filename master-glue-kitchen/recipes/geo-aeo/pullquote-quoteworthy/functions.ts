import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pullquote-quoteworthy` — geo-aeo recipe. */
export const pullquote_quoteworthy_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pullquote-quoteworthy", cat: "geo-aeo" }));
