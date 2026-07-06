import "./styles.css";
import type { ReactNode } from "react";
/**
 * Italic Shift — type recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxItalicShift({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-italic-shift">
      <div className="rfx-italic-shift__inner">
        {children ?? <h2>Italic Shift</h2>}
      </div>
    </section>
  );
}
export default RfxItalicShift;
