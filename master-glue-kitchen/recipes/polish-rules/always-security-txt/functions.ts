import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-security-txt` — polish-rules recipe. */
export const always_security_txt_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-security-txt", cat: "polish-rules" }));
