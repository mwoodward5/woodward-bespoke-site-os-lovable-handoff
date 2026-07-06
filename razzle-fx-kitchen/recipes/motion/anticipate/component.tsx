import "./styles.css";
import type { ReactNode } from "react";
/**
 * Anticipate — motion recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxAnticipate({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-anticipate">
      <div className="rfx-anticipate__inner">
        {children ?? <h2>Anticipate</h2>}
      </div>
    </section>
  );
}
export default RfxAnticipate;
