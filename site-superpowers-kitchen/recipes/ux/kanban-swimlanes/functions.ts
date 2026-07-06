import { createServerFn } from "@tanstack/react-start";
/** Server fn for `kanban-swimlanes`. */
export const kanban_swimlanes_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "kanban-swimlanes" }));
