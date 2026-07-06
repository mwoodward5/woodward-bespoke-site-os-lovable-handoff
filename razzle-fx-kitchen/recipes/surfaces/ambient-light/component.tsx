import "./styles.css";
import type { ReactNode } from "react";
/**
 * Ambient Light — surfaces recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxAmbientLight({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-ambient-light">
      <div className="rfx-ambient-light__inner">
        {children ?? <h2>Ambient Light</h2>}
      </div>
    </section>
  );
}
export default RfxAmbientLight;
