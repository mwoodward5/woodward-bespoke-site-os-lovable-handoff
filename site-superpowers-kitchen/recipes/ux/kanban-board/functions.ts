import { createServerFn } from "@tanstack/react-start";
/** Server fn for `kanban-board`. */
export const kanban_board_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "kanban-board" }));
