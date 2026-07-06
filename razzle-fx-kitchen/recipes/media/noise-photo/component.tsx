import "./styles.css";
import type { ReactNode } from "react";
/**
 * Noise Photo — media recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxNoisePhoto({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-noise-photo">
      <div className="rfx-noise-photo__inner">
        {children ?? <h2>Noise Photo</h2>}
      </div>
    </section>
  );
}
export default RfxNoisePhoto;
