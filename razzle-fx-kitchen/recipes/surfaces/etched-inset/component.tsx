import "./styles.css";
import type { ReactNode } from "react";
/**
 * Etched Inset — surfaces recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxEtchedInset({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-etched-inset">
      <div className="rfx-etched-inset__inner">
        {children ?? <h2>Etched Inset</h2>}
      </div>
    </section>
  );
}
export default RfxEtchedInset;
