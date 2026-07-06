import { createServerFn } from "@tanstack/react-start";
/** Server fn for `collab-crdt-notes`. */
export const collab_crdt_notes_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "collab-crdt-notes" }));
