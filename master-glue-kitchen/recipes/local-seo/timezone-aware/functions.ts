import { createServerFn } from "@tanstack/react-start";
/** Server fn for `timezone-aware` — local-seo recipe. */
export const timezone_aware_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "timezone-aware", cat: "local-seo" }));
