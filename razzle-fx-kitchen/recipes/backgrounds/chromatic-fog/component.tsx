import "./styles.css";
import type { ReactNode } from "react";
/**
 * Chromatic Fog — backgrounds recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxChromaticFog({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-chromatic-fog">
      <div className="rfx-chromatic-fog__inner">
        {children ?? <h2>Chromatic Fog</h2>}
      </div>
    </section>
  );
}
export default RfxChromaticFog;
