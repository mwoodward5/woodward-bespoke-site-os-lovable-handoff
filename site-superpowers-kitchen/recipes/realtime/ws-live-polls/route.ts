import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/api/ws-live-polls")({
  server: { handlers: {
    GET: async () => {
      const stream = new ReadableStream({
        start(c) {
          let n = 0;
          const id = setInterval(() => { c.enqueue(new TextEncoder().encode(`data: ${JSON.stringify({n:++n})}\n\n`)); }, 1000);
          setTimeout(() => { clearInterval(id); c.close(); }, 60000);
        },
      });
      return new Response(stream, { headers: { "Content-Type":"text/event-stream", "Cache-Control":"no-cache" } });
    },
  } },
});
