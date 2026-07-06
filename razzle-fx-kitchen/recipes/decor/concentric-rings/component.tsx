import "./styles.css";
import type { ReactNode } from "react";
/**
 * Concentric Rings — decor recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxConcentricRings({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-concentric-rings">
      <div className="rfx-concentric-rings__inner">
        {children ?? <h2>Concentric Rings</h2>}
      </div>
    </section>
  );
}
export default RfxConcentricRings;
