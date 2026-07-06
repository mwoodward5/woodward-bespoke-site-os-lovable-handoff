import "./styles.css";
import type { ReactNode } from "react";
/**
 * Level Bubble — decor recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxLevelBubble({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-level-bubble">
      <div className="rfx-level-bubble__inner">
        {children ?? <h2>Level Bubble</h2>}
      </div>
    </section>
  );
}
export default RfxLevelBubble;
