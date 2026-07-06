import "./styles.css";
import type { ReactNode } from "react";
/**
 * Spectrum Bars — backgrounds recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxSpectrumBars({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-spectrum-bars">
      <div className="rfx-spectrum-bars__inner">
        {children ?? <h2>Spectrum Bars</h2>}
      </div>
    </section>
  );
}
export default RfxSpectrumBars;
