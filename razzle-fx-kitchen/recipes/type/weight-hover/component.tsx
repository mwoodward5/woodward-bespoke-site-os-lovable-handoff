import "./styles.css";
import type { ReactNode } from "react";
/**
 * Weight Hover — type recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxWeightHover({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-weight-hover">
      <div className="rfx-weight-hover__inner">
        {children ?? <h2>Weight Hover</h2>}
      </div>
    </section>
  );
}
export default RfxWeightHover;
