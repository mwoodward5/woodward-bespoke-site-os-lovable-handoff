import "./styles.css";
import type { ReactNode } from "react";
/**
 * Wave Hover — type recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxWaveHover({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-wave-hover">
      <div className="rfx-wave-hover__inner">
        {children ?? <h2>Wave Hover</h2>}
      </div>
    </section>
  );
}
export default RfxWaveHover;
