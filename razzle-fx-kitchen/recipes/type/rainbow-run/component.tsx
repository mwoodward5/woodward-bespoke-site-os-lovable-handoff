import "./styles.css";
import type { ReactNode } from "react";
/**
 * Rainbow Run — type recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxRainbowRun({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-rainbow-run">
      <div className="rfx-rainbow-run__inner">
        {children ?? <h2>Rainbow Run</h2>}
      </div>
    </section>
  );
}
export default RfxRainbowRun;
