import "./styles.css";
import type { ReactNode } from "react";
/**
 * Dot Noise — decor recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxDotNoise({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-dot-noise">
      <div className="rfx-dot-noise__inner">
        {children ?? <h2>Dot Noise</h2>}
      </div>
    </section>
  );
}
export default RfxDotNoise;
