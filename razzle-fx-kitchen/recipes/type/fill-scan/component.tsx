import "./styles.css";
import type { ReactNode } from "react";
/**
 * Fill Scan — type recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxFillScan({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-fill-scan">
      <div className="rfx-fill-scan__inner">
        {children ?? <h2>Fill Scan</h2>}
      </div>
    </section>
  );
}
export default RfxFillScan;
