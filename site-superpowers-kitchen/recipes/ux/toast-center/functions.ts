import { createServerFn } from "@tanstack/react-start";
/** Server fn for `toast-center`. */
export const toast_center_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "toast-center" }));
