import "./styles.css";
import type { ReactNode } from "react";
/**
 * Sunray — decor recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxSunray({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-sunray">
      <div className="rfx-sunray__inner">
        {children ?? <h2>Sunray</h2>}
      </div>
    </section>
  );
}
export default RfxSunray;
