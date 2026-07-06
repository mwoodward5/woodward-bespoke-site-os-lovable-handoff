import "./styles.css";
import type { ReactNode } from "react";
/**
 * Loop Endless — motion recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxLoopEndless({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-loop-endless">
      <div className="rfx-loop-endless__inner">
        {children ?? <h2>Loop Endless</h2>}
      </div>
    </section>
  );
}
export default RfxLoopEndless;
