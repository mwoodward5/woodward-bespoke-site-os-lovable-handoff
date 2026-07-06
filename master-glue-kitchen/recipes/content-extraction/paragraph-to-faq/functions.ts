import { createServerFn } from "@tanstack/react-start";
/** Server fn for `paragraph-to-faq` — content-extraction recipe. */
export const paragraph_to_faq_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "paragraph-to-faq", cat: "content-extraction" }));
