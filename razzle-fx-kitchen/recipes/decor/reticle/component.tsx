import "./styles.css";
import type { ReactNode } from "react";
/**
 * Reticle — decor recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxReticle({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-reticle">
      <div className="rfx-reticle__inner">
        {children ?? <h2>Reticle</h2>}
      </div>
    </section>
  );
}
export default RfxReticle;
