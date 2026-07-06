import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pdf-to-case-study` — content-extraction recipe. */
export const pdf_to_case_study_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pdf-to-case-study", cat: "content-extraction" }));
