import { createServerFn } from "@tanstack/react-start";
/** Server fn for `case-study-cover` — content-rescue recipe. */
export const case_study_cover_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "case-study-cover", cat: "content-rescue" }));
