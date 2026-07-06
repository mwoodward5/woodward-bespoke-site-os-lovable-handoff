import { createServerFn } from "@tanstack/react-start";
/** Server fn for `meta-tags-suggest` — content-extraction recipe. */
export const meta_tags_suggest_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "meta-tags-suggest", cat: "content-extraction" }));
