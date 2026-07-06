import "./styles.css";
import type { ReactNode } from "react";
/**
 * Frequency Wave — backgrounds recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxFrequencyWave({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-frequency-wave">
      <div className="rfx-frequency-wave__inner">
        {children ?? <h2>Frequency Wave</h2>}
      </div>
    </section>
  );
}
export default RfxFrequencyWave;
