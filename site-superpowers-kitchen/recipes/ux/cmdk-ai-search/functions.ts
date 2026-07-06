import { createServerFn } from "@tanstack/react-start";
/** Server fn for `cmdk-ai-search`. */
export const cmdk_ai_search_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "cmdk-ai-search" }));
