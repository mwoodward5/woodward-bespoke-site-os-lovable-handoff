import { createServerFn } from "@tanstack/react-start";
/** Server fn for `short-answer-summary` — geo-aeo recipe. */
export const short_answer_summary_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "short-answer-summary", cat: "geo-aeo" }));
