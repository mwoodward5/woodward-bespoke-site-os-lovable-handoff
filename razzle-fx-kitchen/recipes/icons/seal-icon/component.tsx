import "./styles.css";
import type { ReactNode } from "react";
/**
 * Seal Icon — icons recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxSealIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-seal-icon">
      <div className="rfx-seal-icon__inner">
        {children ?? <h2>Seal Icon</h2>}
      </div>
    </section>
  );
}
export default RfxSealIcon;
