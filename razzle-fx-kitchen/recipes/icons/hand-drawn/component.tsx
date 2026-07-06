import "./styles.css";
import type { ReactNode } from "react";
/**
 * Hand Drawn — icons recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxHandDrawn({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-hand-drawn">
      <div className="rfx-hand-drawn__inner">
        {children ?? <h2>Hand Drawn</h2>}
      </div>
    </section>
  );
}
export default RfxHandDrawn;
