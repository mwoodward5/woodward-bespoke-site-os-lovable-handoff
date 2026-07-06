import "./styles.css";
import type { ReactNode } from "react";
/**
 * Fill Noise — type recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxFillNoise({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-fill-noise">
      <div className="rfx-fill-noise__inner">
        {children ?? <h2>Fill Noise</h2>}
      </div>
    </section>
  );
}
export default RfxFillNoise;
