import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pdf-to-sections` — content-extraction recipe. */
export const pdf_to_sections_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pdf-to-sections", cat: "content-extraction" }));
