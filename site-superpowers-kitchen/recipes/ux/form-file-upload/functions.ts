import { createServerFn } from "@tanstack/react-start";
/** Server fn for `form-file-upload`. */
export const form_file_upload_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "form-file-upload" }));
