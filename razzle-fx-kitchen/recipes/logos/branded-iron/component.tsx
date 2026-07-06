import "./styles.css";
import type { ReactNode } from "react";
/**
 * Branded Iron — logos recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxBrandedIron({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-branded-iron">
      <div className="rfx-branded-iron__inner">
        {children ?? <h2>Branded Iron</h2>}
      </div>
    </section>
  );
}
export default RfxBrandedIron;
