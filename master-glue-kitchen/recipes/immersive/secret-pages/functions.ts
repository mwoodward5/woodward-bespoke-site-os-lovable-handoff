import { createServerFn } from "@tanstack/react-start";
/** Server fn for `secret-pages` — immersive recipe. */
export const secret_pages_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "secret-pages", cat: "immersive" }));
