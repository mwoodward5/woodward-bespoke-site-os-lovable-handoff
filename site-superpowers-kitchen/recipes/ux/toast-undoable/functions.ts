import { createServerFn } from "@tanstack/react-start";
/** Server fn for `toast-undoable`. */
export const toast_undoable_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "toast-undoable" }));
