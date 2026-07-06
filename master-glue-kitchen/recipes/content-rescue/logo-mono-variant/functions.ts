import { createServerFn } from "@tanstack/react-start";
/** Server fn for `logo-mono-variant` — content-rescue recipe. */
export const logo_mono_variant_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "logo-mono-variant", cat: "content-rescue" }));
