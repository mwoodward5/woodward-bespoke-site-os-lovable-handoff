import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/api/stt-punctuation")({
  server: { handlers: {
    POST: async ({ request }) => {
      const key = process.env.LOVABLE_API_KEY;
      if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });
      const { text, voice } = await request.json();
      const upstream = await fetch("https://ai.gateway.lovable.dev/v1/audio/speech", {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "openai/gpt-4o-mini-tts",
          input: String(text ?? ""), voice: voice ?? "alloy",
          stream_format: "sse", response_format: "pcm",
        }),
      });
      if (!upstream.ok || !upstream.body) return new Response("tts error", { status: 502 });
      return new Response(upstream.body, { headers: { "Content-Type": "text/event-stream" } });
    },
  } },
});
