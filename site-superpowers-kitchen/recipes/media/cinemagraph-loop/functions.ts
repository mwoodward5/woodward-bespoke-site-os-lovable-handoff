import { createServerFn } from "@tanstack/react-start";
/** Server fn for `cinemagraph-loop`. */
export const cinemagraph_loop_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "cinemagraph-loop" }));
