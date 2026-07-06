import "./styles.css";
import type { ReactNode } from "react";
/**
 * Parallax Slow — motion recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxParallaxSlow({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-parallax-slow">
      <div className="rfx-parallax-slow__inner">
        {children ?? <h2>Parallax Slow</h2>}
      </div>
    </section>
  );
}
export default RfxParallaxSlow;
