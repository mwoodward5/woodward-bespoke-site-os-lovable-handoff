import { createServerFn } from "@tanstack/react-start";
/** Server fn for `image-alt-text-ai`. */
export const image_alt_text_ai_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "image-alt-text-ai" }));
