import "./styles.css";
import type { ReactNode } from "react";
/**
 * Neon Icon — icons recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxNeonIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-neon-icon">
      <div className="rfx-neon-icon__inner">
        {children ?? <h2>Neon Icon</h2>}
      </div>
    </section>
  );
}
export default RfxNeonIcon;
