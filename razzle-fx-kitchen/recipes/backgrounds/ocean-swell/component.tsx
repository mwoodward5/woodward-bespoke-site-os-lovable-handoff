import "./styles.css";
import type { ReactNode } from "react";
/**
 * Ocean Swell — backgrounds recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxOceanSwell({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-ocean-swell">
      <div className="rfx-ocean-swell__inner">
        {children ?? <h2>Ocean Swell</h2>}
      </div>
    </section>
  );
}
export default RfxOceanSwell;
