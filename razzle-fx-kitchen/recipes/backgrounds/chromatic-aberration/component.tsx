import "./styles.css";
import type { ReactNode } from "react";
/**
 * Chromatic Aberration — backgrounds recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxChromaticAberration({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-chromatic-aberration">
      <div className="rfx-chromatic-aberration__inner">
        {children ?? <h2>Chromatic Aberration</h2>}
      </div>
    </section>
  );
}
export default RfxChromaticAberration;
