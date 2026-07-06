import "./styles.css";
import type { ReactNode } from "react";
/**
 * Garland — decor recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxGarland({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-garland">
      <div className="rfx-garland__inner">
        {children ?? <h2>Garland</h2>}
      </div>
    </section>
  );
}
export default RfxGarland;
