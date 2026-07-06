import "./styles.css";
import type { ReactNode } from "react";
/**
 * Parallax Drop — logos recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxParallaxDrop({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-parallax-drop">
      <div className="rfx-parallax-drop__inner">
        {children ?? <h2>Parallax Drop</h2>}
      </div>
    </section>
  );
}
export default RfxParallaxDrop;
