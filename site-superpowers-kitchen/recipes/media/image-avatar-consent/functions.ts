import { createServerFn } from "@tanstack/react-start";
/** Server fn for `image-avatar-consent`. */
export const image_avatar_consent_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "image-avatar-consent" }));
