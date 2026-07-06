import "./styles.css";
import type { ReactNode } from "react";
/**
 * Conveyor — motion recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxConveyor({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-conveyor">
      <div className="rfx-conveyor__inner">
        {children ?? <h2>Conveyor</h2>}
      </div>
    </section>
  );
}
export default RfxConveyor;
