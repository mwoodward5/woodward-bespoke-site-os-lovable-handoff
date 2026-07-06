import { createServerFn } from "@tanstack/react-start";
/** Server fn for `dark-mode-contrast` — qc-audit recipe. */
export const dark_mode_contrast_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "dark-mode-contrast", cat: "qc-audit" }));
