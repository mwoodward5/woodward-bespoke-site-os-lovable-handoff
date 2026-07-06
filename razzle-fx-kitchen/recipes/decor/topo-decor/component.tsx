import "./styles.css";
import type { ReactNode } from "react";
/**
 * Topo Decor — decor recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxTopoDecor({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-topo-decor">
      <div className="rfx-topo-decor__inner">
        {children ?? <h2>Topo Decor</h2>}
      </div>
    </section>
  );
}
export default RfxTopoDecor;
