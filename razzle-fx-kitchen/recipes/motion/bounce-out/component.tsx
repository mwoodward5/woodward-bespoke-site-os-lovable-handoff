import "./styles.css";
import type { ReactNode } from "react";
/**
 * Bounce Out — motion recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxBounceOut({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-bounce-out">
      <div className="rfx-bounce-out__inner">
        {children ?? <h2>Bounce Out</h2>}
      </div>
    </section>
  );
}
export default RfxBounceOut;
