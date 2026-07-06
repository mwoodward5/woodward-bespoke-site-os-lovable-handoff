import "./styles.css";
import type { ReactNode } from "react";
/**
 * Paper Fiber — backgrounds recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxPaperFiber({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-paper-fiber">
      <div className="rfx-paper-fiber__inner">
        {children ?? <h2>Paper Fiber</h2>}
      </div>
    </section>
  );
}
export default RfxPaperFiber;
