import "./styles.css";
import type { ReactNode } from "react";
/**
 * Numeral Oldstyle — type recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxNumeralOldstyle({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-numeral-oldstyle">
      <div className="rfx-numeral-oldstyle__inner">
        {children ?? <h2>Numeral Oldstyle</h2>}
      </div>
    </section>
  );
}
export default RfxNumeralOldstyle;
