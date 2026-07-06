import { createServerFn } from "@tanstack/react-start";
/** Server fn for `realestate-declutter` — content-rescue recipe. */
export const realestate_declutter_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "realestate-declutter", cat: "content-rescue" }));
