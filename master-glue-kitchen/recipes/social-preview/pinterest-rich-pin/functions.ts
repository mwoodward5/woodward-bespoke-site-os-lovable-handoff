import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pinterest-rich-pin` — social-preview recipe. */
export const pinterest_rich_pin_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pinterest-rich-pin", cat: "social-preview" }));
