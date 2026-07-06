import { createServerFn } from "@tanstack/react-start";
/** Server fn for `bio-to-full-page` — content-extraction recipe. */
export const bio_to_full_page_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "bio-to-full-page", cat: "content-extraction" }));
