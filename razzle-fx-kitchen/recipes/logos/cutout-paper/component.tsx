import "./styles.css";
import type { ReactNode } from "react";
/**
 * Cutout Paper — logos recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxCutoutPaper({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-cutout-paper">
      <div className="rfx-cutout-paper__inner">
        {children ?? <h2>Cutout Paper</h2>}
      </div>
    </section>
  );
}
export default RfxCutoutPaper;
