import { createServerFn } from "@tanstack/react-start";
/** Server fn for `hotkey-hint-badges`. */
export const hotkey_hint_badges_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "hotkey-hint-badges" }));
