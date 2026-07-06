import "./styles.css";
import type { ReactNode } from "react";
/**
 * Viewfinder — decor recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxViewfinder({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-viewfinder">
      <div className="rfx-viewfinder__inner">
        {children ?? <h2>Viewfinder</h2>}
      </div>
    </section>
  );
}
export default RfxViewfinder;
