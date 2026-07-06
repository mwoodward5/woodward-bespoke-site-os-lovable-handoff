import "./styles.css";
import type { ReactNode } from "react";
/**
 * Tritone — icons recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxTritone({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-tritone">
      <div className="rfx-tritone__inner">
        {children ?? <h2>Tritone</h2>}
      </div>
    </section>
  );
}
export default RfxTritone;
