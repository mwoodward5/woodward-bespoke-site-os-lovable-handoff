import { createServerFn } from "@tanstack/react-start";
/** Server fn for `form-ai-fill`. */
export const form_ai_fill_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "form-ai-fill" }));
