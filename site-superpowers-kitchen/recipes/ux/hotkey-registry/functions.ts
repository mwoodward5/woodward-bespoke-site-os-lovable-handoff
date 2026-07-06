import { createServerFn } from "@tanstack/react-start";
/** Server fn for `hotkey-registry`. */
export const hotkey_registry_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "hotkey-registry" }));
