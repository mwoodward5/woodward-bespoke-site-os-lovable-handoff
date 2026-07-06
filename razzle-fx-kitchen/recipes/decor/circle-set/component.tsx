import "./styles.css";
import type { ReactNode } from "react";
/**
 * Circle Set — decor recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxCircleSet({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-circle-set">
      <div className="rfx-circle-set__inner">
        {children ?? <h2>Circle Set</h2>}
      </div>
    </section>
  );
}
export default RfxCircleSet;
