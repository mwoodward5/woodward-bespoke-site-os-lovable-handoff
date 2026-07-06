import "./styles.css";
import type { ReactNode } from "react";
/**
 * Waveform — decor recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxWaveform({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-waveform">
      <div className="rfx-waveform__inner">
        {children ?? <h2>Waveform</h2>}
      </div>
    </section>
  );
}
export default RfxWaveform;
