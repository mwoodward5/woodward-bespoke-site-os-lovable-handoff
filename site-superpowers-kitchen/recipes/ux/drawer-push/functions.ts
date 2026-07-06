import { createServerFn } from "@tanstack/react-start";
/** Server fn for `drawer-push`. */
export const drawer_push_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "drawer-push" }));
