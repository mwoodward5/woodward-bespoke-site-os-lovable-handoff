import { createServerFn } from "@tanstack/react-start";
/** Server fn for `voice-first-qa` — glue recipe. */
export const voice_first_qa_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "voice-first-qa", cat: "glue" }));
