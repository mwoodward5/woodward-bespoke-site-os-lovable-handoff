import "./styles.css";
import type { ReactNode } from "react";
/**
 * Arrow Set — decor recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxArrowSet({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-arrow-set">
      <div className="rfx-arrow-set__inner">
        {children ?? <h2>Arrow Set</h2>}
      </div>
    </section>
  );
}
export default RfxArrowSet;
