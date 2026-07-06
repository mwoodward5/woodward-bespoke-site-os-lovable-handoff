import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/api/search-hybrid")({
  server: { handlers: {
    POST: async ({ request }) => {
      const key = process.env.LOVABLE_API_KEY;
      if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });
      const { input } = await request.json();
      const upstream = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash", stream: true,
          messages: [
            { role: "system", content: "You are a helpful assistant for search-hybrid." },
            { role: "user", content: String(input ?? "") },
          ],
        }),
      });
      if (!upstream.ok || !upstream.body) return new Response("upstream error", { status: 502 });
      return new Response(upstream.body, { headers: { "Content-Type": "text/event-stream" } });
    },
  } },
});
