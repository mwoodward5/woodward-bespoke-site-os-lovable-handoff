import "./styles.css";
import type { ReactNode } from "react";
/**
 * Synthwave Sun — backgrounds recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxSynthwaveSun({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-synthwave-sun">
      <div className="rfx-synthwave-sun__inner">
        {children ?? <h2>Synthwave Sun</h2>}
      </div>
    </section>
  );
}
export default RfxSynthwaveSun;
