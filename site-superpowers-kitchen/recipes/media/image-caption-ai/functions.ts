import { createServerFn } from "@tanstack/react-start";
/** Server fn for `image-caption-ai`. */
export const image_caption_ai_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "image-caption-ai" }));
