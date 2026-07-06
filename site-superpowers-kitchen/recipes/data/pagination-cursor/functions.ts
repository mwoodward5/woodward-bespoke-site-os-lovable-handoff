import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pagination-cursor`. */
export const pagination_cursor_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pagination-cursor" }));
