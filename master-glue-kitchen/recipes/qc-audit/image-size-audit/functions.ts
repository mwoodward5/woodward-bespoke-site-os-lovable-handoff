import { createServerFn } from "@tanstack/react-start";
/** Server fn for `image-size-audit` — qc-audit recipe. */
export const image_size_audit_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "image-size-audit", cat: "qc-audit" }));
