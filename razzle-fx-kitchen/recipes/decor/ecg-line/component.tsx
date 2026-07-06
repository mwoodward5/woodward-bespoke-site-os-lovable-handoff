import "./styles.css";
import type { ReactNode } from "react";
/**
 * Ecg Line — decor recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxEcgLine({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-ecg-line">
      <div className="rfx-ecg-line__inner">
        {children ?? <h2>Ecg Line</h2>}
      </div>
    </section>
  );
}
export default RfxEcgLine;
