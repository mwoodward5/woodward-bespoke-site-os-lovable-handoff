import "./styles.css";
import type { ReactNode } from "react";
/**
 * Stagger Onscroll — ux recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxStaggerOnscroll({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-stagger-onscroll">
      <div className="rfx-stagger-onscroll__inner">
        {children ?? <h2>Stagger Onscroll</h2>}
      </div>
    </section>
  );
}
export default RfxStaggerOnscroll;
