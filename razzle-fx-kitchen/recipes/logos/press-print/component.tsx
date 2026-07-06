import "./styles.css";
import type { ReactNode } from "react";
/**
 * Press Print — logos recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxPressPrint({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-press-print">
      <div className="rfx-press-print__inner">
        {children ?? <h2>Press Print</h2>}
      </div>
    </section>
  );
}
export default RfxPressPrint;
