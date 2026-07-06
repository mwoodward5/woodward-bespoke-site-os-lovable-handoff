import "./styles.css";
import type { ReactNode } from "react";
/**
 * Spinner Bars — ux recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxSpinnerBars({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-spinner-bars">
      <div className="rfx-spinner-bars__inner">
        {children ?? <h2>Spinner Bars</h2>}
      </div>
    </section>
  );
}
export default RfxSpinnerBars;
