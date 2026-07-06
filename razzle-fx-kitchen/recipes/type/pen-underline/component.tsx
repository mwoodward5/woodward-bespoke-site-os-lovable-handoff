import "./styles.css";
import type { ReactNode } from "react";
/**
 * Pen Underline — type recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxPenUnderline({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-pen-underline">
      <div className="rfx-pen-underline__inner">
        {children ?? <h2>Pen Underline</h2>}
      </div>
    </section>
  );
}
export default RfxPenUnderline;
