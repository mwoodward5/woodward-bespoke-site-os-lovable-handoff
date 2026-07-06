import "./styles.css";
import type { ReactNode } from "react";
/**
 * Marquee Drift — motion recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxMarqueeDrift({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-marquee-drift">
      <div className="rfx-marquee-drift__inner">
        {children ?? <h2>Marquee Drift</h2>}
      </div>
    </section>
  );
}
export default RfxMarqueeDrift;
