import "./styles.css";
import type { ReactNode } from "react";
/**
 * Directional Light — surfaces recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxDirectionalLight({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-directional-light">
      <div className="rfx-directional-light__inner">
        {children ?? <h2>Directional Light</h2>}
      </div>
    </section>
  );
}
export default RfxDirectionalLight;
