import { createServerFn } from "@tanstack/react-start";
/** Server fn for `whatsapp-preview` — social-preview recipe. */
export const whatsapp_preview_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "whatsapp-preview", cat: "social-preview" }));
