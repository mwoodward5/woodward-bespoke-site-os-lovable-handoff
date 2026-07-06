import "./styles.css";
import type { ReactNode } from "react";
/**
 * Duotone — icons recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxDuotone({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-duotone">
      <div className="rfx-duotone__inner">
        {children ?? <h2>Duotone</h2>}
      </div>
    </section>
  );
}
export default RfxDuotone;
