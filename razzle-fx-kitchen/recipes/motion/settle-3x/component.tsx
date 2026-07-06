import "./styles.css";
import type { ReactNode } from "react";
/**
 * Settle 3x — motion recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxSettle3x({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-settle-3x">
      <div className="rfx-settle-3x__inner">
        {children ?? <h2>Settle 3x</h2>}
      </div>
    </section>
  );
}
export default RfxSettle3x;
