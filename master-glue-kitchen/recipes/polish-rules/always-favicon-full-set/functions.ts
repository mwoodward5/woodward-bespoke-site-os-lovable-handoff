import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-favicon-full-set` — polish-rules recipe. */
export const always_favicon_full_set_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-favicon-full-set", cat: "polish-rules" }));
