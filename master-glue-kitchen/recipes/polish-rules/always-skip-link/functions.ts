import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-skip-link` — polish-rules recipe. */
export const always_skip_link_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-skip-link", cat: "polish-rules" }));
