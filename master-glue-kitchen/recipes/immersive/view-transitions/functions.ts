import { createServerFn } from "@tanstack/react-start";
/** Server fn for `view-transitions` — immersive recipe. */
export const view_transitions_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "view-transitions", cat: "immersive" }));
