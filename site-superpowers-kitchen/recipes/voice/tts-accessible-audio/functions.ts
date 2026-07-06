import { createServerFn } from "@tanstack/react-start";
/**
 * Server fn for `tts-accessible-audio` — TTS via Lovable AI.
 * Streams SSE. Chunk long input before sending.
 */
export const speak_tts_accessible_audio = createServerFn({ method: "POST" })
  .inputValidator((d: { text: string; voice?: string }) => d)
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY!;
    const r = await fetch("https://ai.gateway.lovable.dev/v1/audio/speech", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini-tts",
        input: data.text, voice: data.voice ?? "alloy",
        stream_format: "sse", response_format: "pcm",
      }),
    });
    if (!r.ok) throw new Error(`TTS ${r.status}`);
    return { ok: true };
  });
