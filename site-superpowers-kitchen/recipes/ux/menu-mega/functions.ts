import { createServerFn } from "@tanstack/react-start";
/** Server fn for `menu-mega`. */
export const menu_mega_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "menu-mega" }));
