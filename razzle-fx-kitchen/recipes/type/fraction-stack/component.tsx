import "./styles.css";
import type { ReactNode } from "react";
/**
 * Fraction Stack — type recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxFractionStack({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-fraction-stack">
      <div className="rfx-fraction-stack__inner">
        {children ?? <h2>Fraction Stack</h2>}
      </div>
    </section>
  );
}
export default RfxFractionStack;
