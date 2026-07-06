import "./styles.css";
import type { ReactNode } from "react";
/**
 * Outline Hover — type recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxOutlineHover({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-outline-hover">
      <div className="rfx-outline-hover__inner">
        {children ?? <h2>Outline Hover</h2>}
      </div>
    </section>
  );
}
export default RfxOutlineHover;
