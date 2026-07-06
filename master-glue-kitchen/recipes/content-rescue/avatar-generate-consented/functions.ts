import { createServerFn } from "@tanstack/react-start";
/** Server fn for `avatar-generate-consented` — content-rescue recipe. */
export const avatar_generate_consented_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "avatar-generate-consented", cat: "content-rescue" }));
