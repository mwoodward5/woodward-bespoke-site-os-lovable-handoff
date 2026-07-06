import "./styles.css";
import type { ReactNode } from "react";
/**
 * Corner Brackets — decor recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxCornerBrackets({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-corner-brackets">
      <div className="rfx-corner-brackets__inner">
        {children ?? <h2>Corner Brackets</h2>}
      </div>
    </section>
  );
}
export default RfxCornerBrackets;
