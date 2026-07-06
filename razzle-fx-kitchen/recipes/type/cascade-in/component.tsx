import "./styles.css";
import type { ReactNode } from "react";
/**
 * Cascade In — type recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxCascadeIn({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-cascade-in">
      <div className="rfx-cascade-in__inner">
        {children ?? <h2>Cascade In</h2>}
      </div>
    </section>
  );
}
export default RfxCascadeIn;
