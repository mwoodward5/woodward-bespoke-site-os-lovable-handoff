import "./styles.css";
import type { ReactNode } from "react";
/**
 * Spinner Dots — ux recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxSpinnerDots({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-spinner-dots">
      <div className="rfx-spinner-dots__inner">
        {children ?? <h2>Spinner Dots</h2>}
      </div>
    </section>
  );
}
export default RfxSpinnerDots;
