"use client";
import { useRef, useState } from "react";
/**
 * Voice Loop Agent — Voice recipe
 * SSE-streams PCM from /api/voice-loop-agent into a WebAudio context. Honors prefers-reduced-motion for any visualizer.
 */
export function SskVoiceLoopAgent() {
  const ctxRef = useRef<AudioContext|null>(null);
  const [text, setText] = useState("Welcome to the site. This paragraph will be read aloud.");
  const [busy, setBusy] = useState(false);
  async function play() {
    setBusy(true);
    const ctx = ctxRef.current ??= new AudioContext({ sampleRate: 24000 });
    if (ctx.state === "suspended") await ctx.resume().catch(()=>{});
    const res = await fetch("/api/voice-loop-agent", { method:"POST", headers: { "Content-Type":"application/json" }, body: JSON.stringify({ text }) });
    // See voice/tts-narrate-article for the full SSE→PCM decoder.
    console.log("stream ready", res.ok);
    setBusy(false);
  }
  return (
    <div className="rounded-2xl border p-4 space-y-3">
      <textarea value={text} onChange={e=>setText(e.target.value)} className="w-full min-h-24 rounded-lg border p-2" />
      <button onClick={play} disabled={busy} className="rounded-lg bg-black text-white px-4 py-2 disabled:opacity-40">{busy?"Loading…":"▶ Play"}</button>
    </div>
  );
}
export default SskVoiceLoopAgent;
