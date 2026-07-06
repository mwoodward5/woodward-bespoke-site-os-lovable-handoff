import "./styles.css";
import type { ReactNode } from "react";
/**
 * Pennant — decor recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxPennant({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-pennant">
      <div className="rfx-pennant__inner">
        {children ?? <h2>Pennant</h2>}
      </div>
    </section>
  );
}
export default RfxPennant;
