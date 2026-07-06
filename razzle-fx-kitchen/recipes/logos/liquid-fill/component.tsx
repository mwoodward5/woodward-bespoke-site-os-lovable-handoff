import "./styles.css";
import type { ReactNode } from "react";
/**
 * Liquid Fill — logos recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxLiquidFill({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-liquid-fill">
      <div className="rfx-liquid-fill__inner">
        {children ?? <h2>Liquid Fill</h2>}
      </div>
    </section>
  );
}
export default RfxLiquidFill;
