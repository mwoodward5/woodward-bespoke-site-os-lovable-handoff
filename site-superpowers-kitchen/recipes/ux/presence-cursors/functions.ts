import { createServerFn } from "@tanstack/react-start";
/** Server fn for `presence-cursors`. */
export const presence_cursors_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "presence-cursors" }));
