import "./styles.css";
import type { ReactNode } from "react";
/**
 * Deboss Inset — logos recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxDebossInset({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-deboss-inset">
      <div className="rfx-deboss-inset__inner">
        {children ?? <h2>Deboss Inset</h2>}
      </div>
    </section>
  );
}
export default RfxDebossInset;
