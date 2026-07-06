import "./styles.css";
import type { ReactNode } from "react";
/**
 * Chroma Hover — type recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxChromaHover({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-chroma-hover">
      <div className="rfx-chroma-hover__inner">
        {children ?? <h2>Chroma Hover</h2>}
      </div>
    </section>
  );
}
export default RfxChromaHover;
