import { createServerFn } from "@tanstack/react-start";
/** Server fn for `undo-redo`. */
export const undo_redo_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "undo-redo" }));
