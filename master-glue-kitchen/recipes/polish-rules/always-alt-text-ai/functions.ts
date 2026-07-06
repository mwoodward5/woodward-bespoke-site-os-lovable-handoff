import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-alt-text-ai` — polish-rules recipe. */
export const always_alt_text_ai_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-alt-text-ai", cat: "polish-rules" }));
