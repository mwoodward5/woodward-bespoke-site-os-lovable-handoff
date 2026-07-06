import "./styles.css";
import type { ReactNode } from "react";
/**
 * Dot Print — logos recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxDotPrint({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-dot-print">
      <div className="rfx-dot-print__inner">
        {children ?? <h2>Dot Print</h2>}
      </div>
    </section>
  );
}
export default RfxDotPrint;
