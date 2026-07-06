import "./styles.css";
import type { ReactNode } from "react";
/**
 * Scale Bar — decor recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxScaleBar({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-scale-bar">
      <div className="rfx-scale-bar__inner">
        {children ?? <h2>Scale Bar</h2>}
      </div>
    </section>
  );
}
export default RfxScaleBar;
