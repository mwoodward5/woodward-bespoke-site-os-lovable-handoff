import { createServerFn } from "@tanstack/react-start";
/** Server fn for `soft-delete`. */
export const soft_delete_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "soft-delete" }));
