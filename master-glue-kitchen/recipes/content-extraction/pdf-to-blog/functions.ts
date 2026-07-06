import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pdf-to-blog` — content-extraction recipe. */
export const pdf_to_blog_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pdf-to-blog", cat: "content-extraction" }));
