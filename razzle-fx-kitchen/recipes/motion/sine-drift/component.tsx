import "./styles.css";
import type { ReactNode } from "react";
/**
 * Sine Drift — motion recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxSineDrift({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-sine-drift">
      <div className="rfx-sine-drift__inner">
        {children ?? <h2>Sine Drift</h2>}
      </div>
    </section>
  );
}
export default RfxSineDrift;
