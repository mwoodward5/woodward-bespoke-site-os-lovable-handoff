import { createServerFn } from "@tanstack/react-start";
/** Server fn for `discord-embed` — social-preview recipe. */
export const discord_embed_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "discord-embed", cat: "social-preview" }));
