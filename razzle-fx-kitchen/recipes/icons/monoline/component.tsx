import "./styles.css";
import type { ReactNode } from "react";
/**
 * Monoline — icons recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxMonoline({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-monoline">
      <div className="rfx-monoline__inner">
        {children ?? <h2>Monoline</h2>}
      </div>
    </section>
  );
}
export default RfxMonoline;
