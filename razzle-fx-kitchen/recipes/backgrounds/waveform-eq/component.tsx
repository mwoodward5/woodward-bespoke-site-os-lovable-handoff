import "./styles.css";
import type { ReactNode } from "react";
/**
 * Waveform Eq — backgrounds recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxWaveformEq({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-waveform-eq">
      <div className="rfx-waveform-eq__inner">
        {children ?? <h2>Waveform Eq</h2>}
      </div>
    </section>
  );
}
export default RfxWaveformEq;
