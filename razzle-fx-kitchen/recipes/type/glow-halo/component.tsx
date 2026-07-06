import "./styles.css";
import type { ReactNode } from "react";
/**
 * Glow Halo — type recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxGlowHalo({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-glow-halo">
      <div className="rfx-glow-halo__inner">
        {children ?? <h2>Glow Halo</h2>}
      </div>
    </section>
  );
}
export default RfxGlowHalo;
