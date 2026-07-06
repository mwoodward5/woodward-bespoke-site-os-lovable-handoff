import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-manifest-shortcuts` — polish-rules recipe. */
export const always_manifest_shortcuts_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-manifest-shortcuts", cat: "polish-rules" }));
