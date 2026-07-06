import "./styles.css";
import type { ReactNode } from "react";
/**
 * Spectrum Shift — type recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxSpectrumShift({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-spectrum-shift">
      <div className="rfx-spectrum-shift__inner">
        {children ?? <h2>Spectrum Shift</h2>}
      </div>
    </section>
  );
}
export default RfxSpectrumShift;
