import "./styles.css";
import type { ReactNode } from "react";
/**
 * Mountain Fog — backgrounds recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxMountainFog({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-mountain-fog">
      <div className="rfx-mountain-fog__inner">
        {children ?? <h2>Mountain Fog</h2>}
      </div>
    </section>
  );
}
export default RfxMountainFog;
