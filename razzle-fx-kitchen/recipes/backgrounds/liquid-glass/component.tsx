import "./styles.css";
import type { ReactNode } from "react";
/**
 * Liquid Glass — backgrounds recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxLiquidGlass({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-liquid-glass">
      <div className="rfx-liquid-glass__inner">
        {children ?? <h2>Liquid Glass</h2>}
      </div>
    </section>
  );
}
export default RfxLiquidGlass;
