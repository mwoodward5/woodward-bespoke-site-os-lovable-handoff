import "./styles.css";
import type { ReactNode } from "react";
/**
 * Floating Cta — ux recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxFloatingCta({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-floating-cta">
      <div className="rfx-floating-cta__inner">
        {children ?? <h2>Floating Cta</h2>}
      </div>
    </section>
  );
}
export default RfxFloatingCta;
