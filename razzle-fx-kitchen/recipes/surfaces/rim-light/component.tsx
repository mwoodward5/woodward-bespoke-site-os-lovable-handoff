import "./styles.css";
import type { ReactNode } from "react";
/**
 * Rim Light — surfaces recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxRimLight({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-rim-light">
      <div className="rfx-rim-light__inner">
        {children ?? <h2>Rim Light</h2>}
      </div>
    </section>
  );
}
export default RfxRimLight;
