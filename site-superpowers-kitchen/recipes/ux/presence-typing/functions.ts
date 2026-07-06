import { createServerFn } from "@tanstack/react-start";
/** Server fn for `presence-typing`. */
export const presence_typing_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "presence-typing" }));
