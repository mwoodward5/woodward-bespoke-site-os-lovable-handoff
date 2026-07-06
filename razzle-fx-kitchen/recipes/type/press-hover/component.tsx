import "./styles.css";
import type { ReactNode } from "react";
/**
 * Press Hover — type recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxPressHover({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-press-hover">
      <div className="rfx-press-hover__inner">
        {children ?? <h2>Press Hover</h2>}
      </div>
    </section>
  );
}
export default RfxPressHover;
