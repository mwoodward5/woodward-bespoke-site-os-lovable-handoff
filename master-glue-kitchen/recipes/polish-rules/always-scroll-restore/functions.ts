import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-scroll-restore` — polish-rules recipe. */
export const always_scroll_restore_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-scroll-restore", cat: "polish-rules" }));
