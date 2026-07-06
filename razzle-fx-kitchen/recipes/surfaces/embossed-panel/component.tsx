import "./styles.css";
import type { ReactNode } from "react";
/**
 * Embossed Panel — surfaces recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxEmbossedPanel({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-embossed-panel">
      <div className="rfx-embossed-panel__inner">
        {children ?? <h2>Embossed Panel</h2>}
      </div>
    </section>
  );
}
export default RfxEmbossedPanel;
