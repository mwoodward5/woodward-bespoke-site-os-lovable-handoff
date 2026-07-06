import "./styles.css";
import type { ReactNode } from "react";
/**
 * Scale Onscroll — ux recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxScaleOnscroll({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-scale-onscroll">
      <div className="rfx-scale-onscroll__inner">
        {children ?? <h2>Scale Onscroll</h2>}
      </div>
    </section>
  );
}
export default RfxScaleOnscroll;
