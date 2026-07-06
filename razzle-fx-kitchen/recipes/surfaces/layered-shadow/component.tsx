import "./styles.css";
import type { ReactNode } from "react";
/**
 * Layered Shadow — surfaces recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxLayeredShadow({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-layered-shadow">
      <div className="rfx-layered-shadow__inner">
        {children ?? <h2>Layered Shadow</h2>}
      </div>
    </section>
  );
}
export default RfxLayeredShadow;
