import "./styles.css";
import type { ReactNode } from "react";
/**
 * Engrave Icon — icons recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxEngraveIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-engrave-icon">
      <div className="rfx-engrave-icon__inner">
        {children ?? <h2>Engrave Icon</h2>}
      </div>
    </section>
  );
}
export default RfxEngraveIcon;
