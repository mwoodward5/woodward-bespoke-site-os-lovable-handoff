import "./styles.css";
import type { ReactNode } from "react";
/**
 * Coat Of Arms — decor recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxCoatOfArms({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-coat-of-arms">
      <div className="rfx-coat-of-arms__inner">
        {children ?? <h2>Coat Of Arms</h2>}
      </div>
    </section>
  );
}
export default RfxCoatOfArms;
