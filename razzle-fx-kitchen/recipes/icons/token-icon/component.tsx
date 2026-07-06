import "./styles.css";
import type { ReactNode } from "react";
/**
 * Token Icon — icons recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxTokenIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-token-icon">
      <div className="rfx-token-icon__inner">
        {children ?? <h2>Token Icon</h2>}
      </div>
    </section>
  );
}
export default RfxTokenIcon;
