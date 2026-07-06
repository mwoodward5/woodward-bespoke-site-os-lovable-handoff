import "./styles.css";
import type { ReactNode } from "react";
/**
 * Stagger Onscroll V2 — ux recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxStaggerOnscrollV2({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-stagger-onscroll-v2">
      <div className="rfx-stagger-onscroll-v2__inner">
        {children ?? <h2>Stagger Onscroll V2</h2>}
      </div>
    </section>
  );
}
export default RfxStaggerOnscrollV2;
