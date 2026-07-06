import { createServerFn } from "@tanstack/react-start";
/** Server fn for `imessage-rich-link` — social-preview recipe. */
export const imessage_rich_link_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "imessage-rich-link", cat: "social-preview" }));
