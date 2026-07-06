import "./styles.css";
import type { ReactNode } from "react";
/**
 * Depth Layer — logos recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxDepthLayer({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-depth-layer">
      <div className="rfx-depth-layer__inner">
        {children ?? <h2>Depth Layer</h2>}
      </div>
    </section>
  );
}
export default RfxDepthLayer;
