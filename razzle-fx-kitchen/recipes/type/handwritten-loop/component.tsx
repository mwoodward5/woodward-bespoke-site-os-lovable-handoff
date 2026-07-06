import "./styles.css";
import type { ReactNode } from "react";
/**
 * Handwritten Loop — type recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxHandwrittenLoop({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-handwritten-loop">
      <div className="rfx-handwritten-loop__inner">
        {children ?? <h2>Handwritten Loop</h2>}
      </div>
    </section>
  );
}
export default RfxHandwrittenLoop;
