import "./styles.css";
import type { ReactNode } from "react";
/**
 * Debossed Panel — surfaces recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxDebossedPanel({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-debossed-panel">
      <div className="rfx-debossed-panel__inner">
        {children ?? <h2>Debossed Panel</h2>}
      </div>
    </section>
  );
}
export default RfxDebossedPanel;
