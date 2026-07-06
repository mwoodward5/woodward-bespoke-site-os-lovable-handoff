import "./styles.css";
import type { ReactNode } from "react";
/**
 * Pan Right — motion recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxPanRight({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-pan-right">
      <div className="rfx-pan-right__inner">
        {children ?? <h2>Pan Right</h2>}
      </div>
    </section>
  );
}
export default RfxPanRight;
