"use client";
import { useState } from "react";
/**
 * Chat Guardrails — AI recipe
 * Talks to /api/chat-guardrails (server route) which proxies Lovable AI Gateway.
 */
export function SskChatGuardrails() {
  const [input, setInput] = useState("");
  const [out, setOut] = useState("");
  const [busy, setBusy] = useState(false);
  async function send() {
    setBusy(true); setOut("");
    const res = await fetch("/api/chat-guardrails", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input }),
    });
    const reader = res.body?.getReader(); const dec = new TextDecoder();
    while (reader) { const {value,done} = await reader.read(); if (done) break; setOut(o => o + dec.decode(value)); }
    setBusy(false);
  }
  return (
    <div className="rounded-2xl border border-black/10 p-4 space-y-3">
      <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Type…" className="w-full min-h-24 rounded-lg border p-2" />
      <button onClick={send} disabled={busy||!input} className="rounded-lg bg-black text-white px-4 py-2 disabled:opacity-40">{busy?"Thinking…":"Send"}</button>
      <pre className="whitespace-pre-wrap text-sm bg-black/5 rounded-lg p-3 min-h-16">{out}</pre>
    </div>
  );
}
export default SskChatGuardrails;
