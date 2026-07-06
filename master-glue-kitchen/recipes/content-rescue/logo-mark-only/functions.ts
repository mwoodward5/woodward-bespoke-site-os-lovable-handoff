import { createServerFn } from "@tanstack/react-start";
/** Server fn for `logo-mark-only` — content-rescue recipe. */
export const logo_mark_only_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "logo-mark-only", cat: "content-rescue" }));
