import "./styles.css";
import type { ReactNode } from "react";
/**
 * Led Dot — logos recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxLedDot({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-led-dot">
      <div className="rfx-led-dot__inner">
        {children ?? <h2>Led Dot</h2>}
      </div>
    </section>
  );
}
export default RfxLedDot;
