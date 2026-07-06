import { createServerFn } from "@tanstack/react-start";
/** Server fn for `avatar-illustrated` — content-rescue recipe. */
export const avatar_illustrated_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "avatar-illustrated", cat: "content-rescue" }));
