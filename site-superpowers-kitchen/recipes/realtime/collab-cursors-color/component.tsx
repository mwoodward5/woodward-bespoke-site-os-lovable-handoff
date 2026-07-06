"use client";
import { useEffect, useState } from "react";
/**
 * Collab Cursors Color — Realtime recipe
 * Subscribes to a Supabase Realtime channel or SSE endpoint.
 */
export function SskCollabCursorsColor() {
  const [n, setN] = useState(0);
  useEffect(() => {
    const es = new EventSource("/api/collab-cursors-color");
    es.onmessage = (e) => setN(v => v + 1);
    return () => es.close();
  }, []);
  return <div className="rounded-2xl border p-4">Live events received: <b>{n}</b></div>;
}
export default SskCollabCursorsColor;
