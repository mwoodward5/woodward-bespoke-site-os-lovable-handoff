import { createServerFn } from "@tanstack/react-start";
/** Server fn for `internal-links-suggest` — content-extraction recipe. */
export const internal_links_suggest_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "internal-links-suggest", cat: "content-extraction" }));
