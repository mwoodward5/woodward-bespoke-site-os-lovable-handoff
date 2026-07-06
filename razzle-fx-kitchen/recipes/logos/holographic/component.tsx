import "./styles.css";
import type { ReactNode } from "react";
/**
 * Holographic — logos recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxHolographic({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-holographic">
      <div className="rfx-holographic__inner">
        {children ?? <h2>Holographic</h2>}
      </div>
    </section>
  );
}
export default RfxHolographic;
