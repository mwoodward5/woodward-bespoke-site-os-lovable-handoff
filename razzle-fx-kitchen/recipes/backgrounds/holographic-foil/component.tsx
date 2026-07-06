import "./styles.css";
import type { ReactNode } from "react";
/**
 * Holographic Foil — backgrounds recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxHolographicFoil({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-holographic-foil">
      <div className="rfx-holographic-foil__inner">
        {children ?? <h2>Holographic Foil</h2>}
      </div>
    </section>
  );
}
export default RfxHolographicFoil;
