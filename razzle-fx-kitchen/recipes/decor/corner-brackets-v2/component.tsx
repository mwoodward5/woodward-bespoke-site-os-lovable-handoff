import "./styles.css";
import type { ReactNode } from "react";
/**
 * Corner Brackets V2 — decor recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxCornerBracketsV2({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-corner-brackets-v2">
      <div className="rfx-corner-brackets-v2__inner">
        {children ?? <h2>Corner Brackets V2</h2>}
      </div>
    </section>
  );
}
export default RfxCornerBracketsV2;
