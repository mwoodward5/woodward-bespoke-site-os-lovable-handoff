import "./styles.css";
import type { ReactNode } from "react";
/**
 * Quad Glide — motion recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxQuadGlide({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-quad-glide">
      <div className="rfx-quad-glide__inner">
        {children ?? <h2>Quad Glide</h2>}
      </div>
    </section>
  );
}
export default RfxQuadGlide;
