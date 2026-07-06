import "./styles.css";
import type { ReactNode } from "react";
/**
 * Damped Oscillate — motion recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxDampedOscillate({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-damped-oscillate">
      <div className="rfx-damped-oscillate__inner">
        {children ?? <h2>Damped Oscillate</h2>}
      </div>
    </section>
  );
}
export default RfxDampedOscillate;
