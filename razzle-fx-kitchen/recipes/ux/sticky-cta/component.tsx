import "./styles.css";
import type { ReactNode } from "react";
/**
 * Sticky Cta — ux recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxStickyCta({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-sticky-cta">
      <div className="rfx-sticky-cta__inner">
        {children ?? <h2>Sticky Cta</h2>}
      </div>
    </section>
  );
}
export default RfxStickyCta;
