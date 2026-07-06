import "./styles.css";
import type { ReactNode } from "react";
/**
 * Kinetic Marquee — type recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxKineticMarquee({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-kinetic-marquee">
      <div className="rfx-kinetic-marquee__inner">
        {children ?? <h2>Kinetic Marquee</h2>}
      </div>
    </section>
  );
}
export default RfxKineticMarquee;
