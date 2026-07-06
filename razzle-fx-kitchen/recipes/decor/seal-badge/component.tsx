import "./styles.css";
import type { ReactNode } from "react";
/**
 * Seal Badge — decor recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxSealBadge({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-seal-badge">
      <div className="rfx-seal-badge__inner">
        {children ?? <h2>Seal Badge</h2>}
      </div>
    </section>
  );
}
export default RfxSealBadge;
