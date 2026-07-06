import "./styles.css";
import type { ReactNode } from "react";
/**
 * Canvas Weave — backgrounds recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxCanvasWeave({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-canvas-weave">
      <div className="rfx-canvas-weave__inner">
        {children ?? <h2>Canvas Weave</h2>}
      </div>
    </section>
  );
}
export default RfxCanvasWeave;
