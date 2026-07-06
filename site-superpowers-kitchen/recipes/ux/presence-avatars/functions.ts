import { createServerFn } from "@tanstack/react-start";
/** Server fn for `presence-avatars`. */
export const presence_avatars_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "presence-avatars" }));
