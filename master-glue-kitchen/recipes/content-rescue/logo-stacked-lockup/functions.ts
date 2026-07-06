import { createServerFn } from "@tanstack/react-start";
/** Server fn for `logo-stacked-lockup` — content-rescue recipe. */
export const logo_stacked_lockup_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "logo-stacked-lockup", cat: "content-rescue" }));
