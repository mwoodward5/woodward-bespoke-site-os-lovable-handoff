import { createServerFn } from "@tanstack/react-start";
/** Server fn for `orphan-page-detector` — qc-audit recipe. */
export const orphan_page_detector_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "orphan-page-detector", cat: "qc-audit" }));
