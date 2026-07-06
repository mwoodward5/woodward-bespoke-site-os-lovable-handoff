import "./styles.css";
import type { ReactNode } from "react";
/**
 * Overshoot — motion recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxOvershoot({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-overshoot">
      <div className="rfx-overshoot__inner">
        {children ?? <h2>Overshoot</h2>}
      </div>
    </section>
  );
}
export default RfxOvershoot;
