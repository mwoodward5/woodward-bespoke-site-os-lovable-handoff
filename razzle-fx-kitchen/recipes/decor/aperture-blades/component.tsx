import "./styles.css";
import type { ReactNode } from "react";
/**
 * Aperture Blades — decor recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxApertureBlades({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-aperture-blades">
      <div className="rfx-aperture-blades__inner">
        {children ?? <h2>Aperture Blades</h2>}
      </div>
    </section>
  );
}
export default RfxApertureBlades;
