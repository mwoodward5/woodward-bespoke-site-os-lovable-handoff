import "./styles.css";
import type { ReactNode } from "react";
/**
 * Stipple Dot — logos recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxStippleDot({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-stipple-dot">
      <div className="rfx-stipple-dot__inner">
        {children ?? <h2>Stipple Dot</h2>}
      </div>
    </section>
  );
}
export default RfxStippleDot;
