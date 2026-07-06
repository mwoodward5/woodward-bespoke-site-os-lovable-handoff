import "./styles.css";
import type { ReactNode } from "react";
/**
 * Radial Halo — backgrounds recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxRadialHalo({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-radial-halo">
      <div className="rfx-radial-halo__inner">
        {children ?? <h2>Radial Halo</h2>}
      </div>
    </section>
  );
}
export default RfxRadialHalo;
