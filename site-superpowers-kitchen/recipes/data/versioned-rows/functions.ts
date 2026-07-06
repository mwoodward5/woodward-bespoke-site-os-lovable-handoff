import { createServerFn } from "@tanstack/react-start";
/** Server fn for `versioned-rows`. */
export const versioned_rows_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "versioned-rows" }));
