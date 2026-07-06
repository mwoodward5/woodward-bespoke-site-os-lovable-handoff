import { createServerFn } from "@tanstack/react-start";
/** Server fn for `case-study-writeup` — content-extraction recipe. */
export const case_study_writeup_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "case-study-writeup", cat: "content-extraction" }));
