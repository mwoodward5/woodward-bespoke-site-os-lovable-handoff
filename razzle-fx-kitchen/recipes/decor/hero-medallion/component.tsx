import "./styles.css";
import type { ReactNode } from "react";
/**
 * Hero Medallion — decor recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxHeroMedallion({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-hero-medallion">
      <div className="rfx-hero-medallion__inner">
        {children ?? <h2>Hero Medallion</h2>}
      </div>
    </section>
  );
}
export default RfxHeroMedallion;
