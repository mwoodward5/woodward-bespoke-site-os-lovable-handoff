import { createServerFn } from "@tanstack/react-start";

/**
 * Server fn for `chat-multilingual` — calls Lovable AI Gateway with streaming.
 * Never expose LOVABLE_API_KEY to the client.
 */
export const runchat_multilingual = createServerFn({ method: "POST" })
  .inputValidator((d: { input: string }) => d)
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY!;
    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        stream: true,
        messages: [
          { role: "system", content: "You are a helpful assistant for chat-multilingual." },
          { role: "user", content: data.input },
        ],
      }),
    });
    if (!res.ok) throw new Error(`AI gateway ${res.status}`);
    return { ok: true };
  });
