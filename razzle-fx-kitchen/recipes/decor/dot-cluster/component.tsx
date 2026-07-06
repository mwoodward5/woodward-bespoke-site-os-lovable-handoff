import "./styles.css";
import type { ReactNode } from "react";
/**
 * Dot Cluster — decor recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxDotCluster({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-dot-cluster">
      <div className="rfx-dot-cluster__inner">
        {children ?? <h2>Dot Cluster</h2>}
      </div>
    </section>
  );
}
export default RfxDotCluster;
