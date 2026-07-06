import "./styles.css";
import type { ReactNode } from "react";
/**
 * Copper Patina — backgrounds recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxCopperPatina({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-copper-patina">
      <div className="rfx-copper-patina__inner">
        {children ?? <h2>Copper Patina</h2>}
      </div>
    </section>
  );
}
export default RfxCopperPatina;
