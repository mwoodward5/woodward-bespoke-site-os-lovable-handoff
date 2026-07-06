import "./styles.css";
import type { ReactNode } from "react";
/**
 * Focus Ring Brutal — ux recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxFocusRingBrutal({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-focus-ring-brutal">
      <div className="rfx-focus-ring-brutal__inner">
        {children ?? <h2>Focus Ring Brutal</h2>}
      </div>
    </section>
  );
}
export default RfxFocusRingBrutal;
