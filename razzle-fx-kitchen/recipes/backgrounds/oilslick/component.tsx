import "./styles.css";
import type { ReactNode } from "react";
/**
 * Oilslick — backgrounds recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxOilslick({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-oilslick">
      <div className="rfx-oilslick__inner">
        {children ?? <h2>Oilslick</h2>}
      </div>
    </section>
  );
}
export default RfxOilslick;
