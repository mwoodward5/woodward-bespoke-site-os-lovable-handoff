import "./styles.css";
import type { ReactNode } from "react";
/**
 * Fill Hover — type recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxFillHover({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-fill-hover">
      <div className="rfx-fill-hover__inner">
        {children ?? <h2>Fill Hover</h2>}
      </div>
    </section>
  );
}
export default RfxFillHover;
