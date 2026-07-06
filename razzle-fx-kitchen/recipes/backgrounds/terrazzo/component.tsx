import "./styles.css";
import type { ReactNode } from "react";
/**
 * Terrazzo — backgrounds recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxTerrazzo({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-terrazzo">
      <div className="rfx-terrazzo__inner">
        {children ?? <h2>Terrazzo</h2>}
      </div>
    </section>
  );
}
export default RfxTerrazzo;
