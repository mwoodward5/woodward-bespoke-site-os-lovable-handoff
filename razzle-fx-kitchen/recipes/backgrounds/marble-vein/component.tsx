import "./styles.css";
import type { ReactNode } from "react";
/**
 * Marble Vein — backgrounds recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxMarbleVein({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-marble-vein">
      <div className="rfx-marble-vein__inner">
        {children ?? <h2>Marble Vein</h2>}
      </div>
    </section>
  );
}
export default RfxMarbleVein;
