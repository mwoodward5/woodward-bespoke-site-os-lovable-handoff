import "./styles.css";
import type { ReactNode } from "react";
/**
 * Liquid Metal — backgrounds recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxLiquidMetal({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-liquid-metal">
      <div className="rfx-liquid-metal__inner">
        {children ?? <h2>Liquid Metal</h2>}
      </div>
    </section>
  );
}
export default RfxLiquidMetal;
