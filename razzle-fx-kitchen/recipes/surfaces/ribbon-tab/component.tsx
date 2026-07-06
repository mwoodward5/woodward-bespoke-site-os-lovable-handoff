import "./styles.css";
import type { ReactNode } from "react";
/**
 * Ribbon Tab — surfaces recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxRibbonTab({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-ribbon-tab">
      <div className="rfx-ribbon-tab__inner">
        {children ?? <h2>Ribbon Tab</h2>}
      </div>
    </section>
  );
}
export default RfxRibbonTab;
