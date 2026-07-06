import { createServerFn } from "@tanstack/react-start";
/** Server fn for `logo-horizontal-lockup` — content-rescue recipe. */
export const logo_horizontal_lockup_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "logo-horizontal-lockup", cat: "content-rescue" }));
