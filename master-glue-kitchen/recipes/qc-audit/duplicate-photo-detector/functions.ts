import { createServerFn } from "@tanstack/react-start";
/** Server fn for `duplicate-photo-detector` — qc-audit recipe. */
export const duplicate_photo_detector_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "duplicate-photo-detector", cat: "qc-audit" }));
