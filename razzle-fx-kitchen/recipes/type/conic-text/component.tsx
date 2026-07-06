import "./styles.css";
import type { ReactNode } from "react";
/**
 * Conic Text — type recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxConicText({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-conic-text">
      <div className="rfx-conic-text__inner">
        {children ?? <h2>Conic Text</h2>}
      </div>
    </section>
  );
}
export default RfxConicText;
