import "./styles.css";
import type { ReactNode } from "react";
/**
 * Float Hover — type recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxFloatHover({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-float-hover">
      <div className="rfx-float-hover__inner">
        {children ?? <h2>Float Hover</h2>}
      </div>
    </section>
  );
}
export default RfxFloatHover;
