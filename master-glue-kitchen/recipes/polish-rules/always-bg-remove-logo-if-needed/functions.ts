import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-bg-remove-logo-if-needed` — polish-rules recipe. */
export const always_bg_remove_logo_if_needed_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-bg-remove-logo-if-needed", cat: "polish-rules" }));
