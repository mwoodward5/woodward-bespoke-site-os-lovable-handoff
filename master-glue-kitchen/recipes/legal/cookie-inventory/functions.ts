import { createServerFn } from "@tanstack/react-start";
/** Server fn for `cookie-inventory` — legal recipe. */
export const cookie_inventory_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "cookie-inventory", cat: "legal" }));
