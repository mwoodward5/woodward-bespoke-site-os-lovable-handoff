import "./styles.css";
import type { ReactNode } from "react";
/**
 * Parallax Photo — media recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxParallaxPhoto({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-parallax-photo">
      <div className="rfx-parallax-photo__inner">
        {children ?? <h2>Parallax Photo</h2>}
      </div>
    </section>
  );
}
export default RfxParallaxPhoto;
