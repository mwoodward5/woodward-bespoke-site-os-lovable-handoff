import "./styles.css";
import type { ReactNode } from "react";
/**
 * Pendulum — motion recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxPendulum({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-pendulum">
      <div className="rfx-pendulum__inner">
        {children ?? <h2>Pendulum</h2>}
      </div>
    </section>
  );
}
export default RfxPendulum;
