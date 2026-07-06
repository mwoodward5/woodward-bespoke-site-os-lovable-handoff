import { createServerFn } from "@tanstack/react-start";
/** Server fn for `timezone-aware-content` — glue recipe. */
export const timezone_aware_content_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "timezone-aware-content", cat: "glue" }));
