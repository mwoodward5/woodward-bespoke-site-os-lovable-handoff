import "./styles.css";
import type { ReactNode } from "react";
/**
 * Back Out — motion recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxBackOut({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-back-out">
      <div className="rfx-back-out__inner">
        {children ?? <h2>Back Out</h2>}
      </div>
    </section>
  );
}
export default RfxBackOut;
