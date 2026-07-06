import "./styles.css";
import type { ReactNode } from "react";
/**
 * Scroll Progress — motion recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxScrollProgress({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-scroll-progress">
      <div className="rfx-scroll-progress__inner">
        {children ?? <h2>Scroll Progress</h2>}
      </div>
    </section>
  );
}
export default RfxScrollProgress;
