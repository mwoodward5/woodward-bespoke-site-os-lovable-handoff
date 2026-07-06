import { createServerFn } from "@tanstack/react-start";
/** Server fn for `consent-mode-v2` — legal recipe. */
export const consent_mode_v2_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "consent-mode-v2", cat: "legal" }));
