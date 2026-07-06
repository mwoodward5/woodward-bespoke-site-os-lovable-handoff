import "./styles.css";
import type { ReactNode } from "react";
/**
 * Stitched Thread — logos recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxStitchedThread({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-stitched-thread">
      <div className="rfx-stitched-thread__inner">
        {children ?? <h2>Stitched Thread</h2>}
      </div>
    </section>
  );
}
export default RfxStitchedThread;
