import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pdf-generate`. */
export const pdf_generate_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pdf-generate" }));
