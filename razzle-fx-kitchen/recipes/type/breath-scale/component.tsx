import "./styles.css";
import type { ReactNode } from "react";
/**
 * Breath Scale — type recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxBreathScale({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-breath-scale">
      <div className="rfx-breath-scale__inner">
        {children ?? <h2>Breath Scale</h2>}
      </div>
    </section>
  );
}
export default RfxBreathScale;
