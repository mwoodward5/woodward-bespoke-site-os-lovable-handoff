import { createServerFn } from "@tanstack/react-start";
/** Server fn for `logo-reverse-variant` — content-rescue recipe. */
export const logo_reverse_variant_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "logo-reverse-variant", cat: "content-rescue" }));
