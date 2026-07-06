import { createServerFn } from "@tanstack/react-start";
/** Server fn for `diff-viewer`. */
export const diff_viewer_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "diff-viewer" }));
