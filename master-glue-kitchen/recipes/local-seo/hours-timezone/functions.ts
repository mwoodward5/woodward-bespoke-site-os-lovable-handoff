import { createServerFn } from "@tanstack/react-start";
/** Server fn for `hours-timezone` — local-seo recipe. */
export const hours_timezone_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "hours-timezone", cat: "local-seo" }));
