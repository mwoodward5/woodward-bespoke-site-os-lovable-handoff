import { createServerFn } from "@tanstack/react-start";
/** Server fn for `virtual-list-10k`. */
export const virtual_list_10k_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "virtual-list-10k" }));
