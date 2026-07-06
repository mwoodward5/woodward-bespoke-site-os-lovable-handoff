import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pagination-offset`. */
export const pagination_offset_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pagination-offset" }));
