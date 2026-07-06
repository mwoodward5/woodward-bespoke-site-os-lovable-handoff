import "./styles.css";
import type { ReactNode } from "react";
/**
 * Chroma Icon — icons recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxChromaIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-chroma-icon">
      <div className="rfx-chroma-icon__inner">
        {children ?? <h2>Chroma Icon</h2>}
      </div>
    </section>
  );
}
export default RfxChromaIcon;
