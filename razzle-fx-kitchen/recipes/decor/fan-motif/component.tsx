import "./styles.css";
import type { ReactNode } from "react";
/**
 * Fan Motif — decor recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxFanMotif({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-fan-motif">
      <div className="rfx-fan-motif__inner">
        {children ?? <h2>Fan Motif</h2>}
      </div>
    </section>
  );
}
export default RfxFanMotif;
