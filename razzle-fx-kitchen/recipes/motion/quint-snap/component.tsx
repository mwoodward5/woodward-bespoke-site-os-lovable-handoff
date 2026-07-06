import "./styles.css";
import type { ReactNode } from "react";
/**
 * Quint Snap — motion recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxQuintSnap({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-quint-snap">
      <div className="rfx-quint-snap__inner">
        {children ?? <h2>Quint Snap</h2>}
      </div>
    </section>
  );
}
export default RfxQuintSnap;
