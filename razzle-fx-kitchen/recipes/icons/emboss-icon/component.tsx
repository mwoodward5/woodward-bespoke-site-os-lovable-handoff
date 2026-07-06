import "./styles.css";
import type { ReactNode } from "react";
/**
 * Emboss Icon — icons recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxEmbossIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-emboss-icon">
      <div className="rfx-emboss-icon__inner">
        {children ?? <h2>Emboss Icon</h2>}
      </div>
    </section>
  );
}
export default RfxEmbossIcon;
