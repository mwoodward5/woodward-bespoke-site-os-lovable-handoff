import { createServerFn } from "@tanstack/react-start";
/** Server fn for `collab-cursors-color`. */
export const collab_cursors_color_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "collab-cursors-color" }));
