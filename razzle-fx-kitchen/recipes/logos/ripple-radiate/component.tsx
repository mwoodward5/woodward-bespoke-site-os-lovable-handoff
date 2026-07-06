import "./styles.css";
import type { ReactNode } from "react";
/**
 * Ripple Radiate — logos recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxRippleRadiate({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-ripple-radiate">
      <div className="rfx-ripple-radiate__inner">
        {children ?? <h2>Ripple Radiate</h2>}
      </div>
    </section>
  );
}
export default RfxRippleRadiate;
