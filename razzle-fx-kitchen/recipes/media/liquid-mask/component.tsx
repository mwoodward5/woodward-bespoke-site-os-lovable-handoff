import "./styles.css";
import type { ReactNode } from "react";
/**
 * Liquid Mask — media recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxLiquidMask({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-liquid-mask">
      <div className="rfx-liquid-mask__inner">
        {children ?? <h2>Liquid Mask</h2>}
      </div>
    </section>
  );
}
export default RfxLiquidMask;
