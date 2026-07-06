import { createServerFn } from "@tanstack/react-start";
/** Server fn for `security-txt` — legal recipe. */
export const security_txt_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "security-txt", cat: "legal" }));
