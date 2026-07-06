import { createServerFn } from "@tanstack/react-start";
/** Server fn for `doc-answer-questions`. */
export const doc_answer_questions_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "doc-answer-questions" }));
