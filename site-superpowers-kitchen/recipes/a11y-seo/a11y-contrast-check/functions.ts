import { createServerFn } from "@tanstack/react-start";
/** Server fn for `a11y-contrast-check`. */
export const a11y_contrast_check_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "a11y-contrast-check" }));
