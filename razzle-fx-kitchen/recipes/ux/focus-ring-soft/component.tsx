import "./styles.css";
import type { ReactNode } from "react";
/**
 * Focus Ring Soft — ux recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxFocusRingSoft({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-focus-ring-soft">
      <div className="rfx-focus-ring-soft__inner">
        {children ?? <h2>Focus Ring Soft</h2>}
      </div>
    </section>
  );
}
export default RfxFocusRingSoft;
