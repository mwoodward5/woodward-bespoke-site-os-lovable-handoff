import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pdf-to-outline` — content-extraction recipe. */
export const pdf_to_outline_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pdf-to-outline", cat: "content-extraction" }));
