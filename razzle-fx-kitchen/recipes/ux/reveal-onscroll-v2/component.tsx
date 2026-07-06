import "./styles.css";
import type { ReactNode } from "react";
/**
 * Reveal Onscroll V2 — ux recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxRevealOnscrollV2({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-reveal-onscroll-v2">
      <div className="rfx-reveal-onscroll-v2__inner">
        {children ?? <h2>Reveal Onscroll V2</h2>}
      </div>
    </section>
  );
}
export default RfxRevealOnscrollV2;
