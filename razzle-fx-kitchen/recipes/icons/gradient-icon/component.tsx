import "./styles.css";
import type { ReactNode } from "react";
/**
 * Gradient Icon — icons recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxGradientIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-gradient-icon">
      <div className="rfx-gradient-icon__inner">
        {children ?? <h2>Gradient Icon</h2>}
      </div>
    </section>
  );
}
export default RfxGradientIcon;
