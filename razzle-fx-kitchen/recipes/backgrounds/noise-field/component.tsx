import "./styles.css";
import type { ReactNode } from "react";
/**
 * Noise Field — backgrounds recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxNoiseField({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-noise-field">
      <div className="rfx-noise-field__inner">
        {children ?? <h2>Noise Field</h2>}
      </div>
    </section>
  );
}
export default RfxNoiseField;
