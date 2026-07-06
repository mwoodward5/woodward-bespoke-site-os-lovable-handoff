import { createServerFn } from "@tanstack/react-start";
/** Server fn for `form-save-progress`. */
export const form_save_progress_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "form-save-progress" }));
