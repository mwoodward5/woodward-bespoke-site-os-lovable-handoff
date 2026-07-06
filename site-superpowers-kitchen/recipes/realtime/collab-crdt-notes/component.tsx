"use client";
import { useEffect, useState } from "react";
/**
 * Collab Crdt Notes — Realtime recipe
 * Subscribes to a Supabase Realtime channel or SSE endpoint.
 */
export function SskCollabCrdtNotes() {
  const [n, setN] = useState(0);
  useEffect(() => {
    const es = new EventSource("/api/collab-crdt-notes");
    es.onmessage = (e) => setN(v => v + 1);
    return () => es.close();
  }, []);
  return <div className="rounded-2xl border p-4">Live events received: <b>{n}</b></div>;
}
export default SskCollabCrdtNotes;
