import "./styles.css";
import type { ReactNode } from "react";
/**
 * Hdr Panel — surfaces recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxHdrPanel({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-hdr-panel">
      <div className="rfx-hdr-panel__inner">
        {children ?? <h2>Hdr Panel</h2>}
      </div>
    </section>
  );
}
export default RfxHdrPanel;
