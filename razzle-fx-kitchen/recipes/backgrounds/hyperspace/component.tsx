import "./styles.css";
import type { ReactNode } from "react";
/**
 * Hyperspace — backgrounds recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxHyperspace({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-hyperspace">
      <div className="rfx-hyperspace__inner">
        {children ?? <h2>Hyperspace</h2>}
      </div>
    </section>
  );
}
export default RfxHyperspace;
