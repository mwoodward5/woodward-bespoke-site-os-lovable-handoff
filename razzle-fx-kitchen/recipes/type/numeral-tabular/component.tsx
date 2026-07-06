import "./styles.css";
import type { ReactNode } from "react";
/**
 * Numeral Tabular — type recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxNumeralTabular({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-numeral-tabular">
      <div className="rfx-numeral-tabular__inner">
        {children ?? <h2>Numeral Tabular</h2>}
      </div>
    </section>
  );
}
export default RfxNumeralTabular;
