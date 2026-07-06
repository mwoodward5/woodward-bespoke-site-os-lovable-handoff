import { createServerFn } from "@tanstack/react-start";
/** Server fn for `autocomplete-basic`. */
export const autocomplete_basic_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "autocomplete-basic" }));
