import { createServerFn } from "@tanstack/react-start";
/** Server fn for `modal-scale`. */
export const modal_scale_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "modal-scale" }));
