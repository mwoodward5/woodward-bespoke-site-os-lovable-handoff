import "./styles.css";
import type { ReactNode } from "react";
/**
 * Glitch Band — backgrounds recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxGlitchBand({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-glitch-band">
      <div className="rfx-glitch-band__inner">
        {children ?? <h2>Glitch Band</h2>}
      </div>
    </section>
  );
}
export default RfxGlitchBand;
