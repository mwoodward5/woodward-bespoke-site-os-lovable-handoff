import "./styles.css";
import type { ReactNode } from "react";
/**
 * Chat Bubble — ux recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxChatBubble({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-chat-bubble">
      <div className="rfx-chat-bubble__inner">
        {children ?? <h2>Chat Bubble</h2>}
      </div>
    </section>
  );
}
export default RfxChatBubble;
