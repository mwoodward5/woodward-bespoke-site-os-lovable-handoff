import { createServerFn } from "@tanstack/react-start";
/** Server fn for `case-study-outline` — content-extraction recipe. */
export const case_study_outline_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "case-study-outline", cat: "content-extraction" }));
