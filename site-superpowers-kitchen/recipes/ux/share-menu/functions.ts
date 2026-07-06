import { createServerFn } from "@tanstack/react-start";
/** Server fn for `share-menu`. */
export const share_menu_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "share-menu" }));
