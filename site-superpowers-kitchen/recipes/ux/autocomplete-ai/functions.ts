import { createServerFn } from "@tanstack/react-start";
/** Server fn for `autocomplete-ai`. */
export const autocomplete_ai_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "autocomplete-ai" }));
