import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-tel-mailto-fallback` — polish-rules recipe. */
export const always_tel_mailto_fallback_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-tel-mailto-fallback", cat: "polish-rules" }));
