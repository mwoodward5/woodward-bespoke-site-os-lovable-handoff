import { createServerFn } from "@tanstack/react-start";
/** Server fn for `realestate-lawn-boost` — content-rescue recipe. */
export const realestate_lawn_boost_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "realestate-lawn-boost", cat: "content-rescue" }));
