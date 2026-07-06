import "./styles.css";
import type { ReactNode } from "react";
/**
 * Parallax Deep — motion recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxParallaxDeep({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-parallax-deep">
      <div className="rfx-parallax-deep__inner">
        {children ?? <h2>Parallax Deep</h2>}
      </div>
    </section>
  );
}
export default RfxParallaxDeep;
