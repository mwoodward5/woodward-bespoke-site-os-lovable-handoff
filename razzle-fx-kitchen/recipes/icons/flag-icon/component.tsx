import "./styles.css";
import type { ReactNode } from "react";
/**
 * Flag Icon — icons recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxFlagIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-flag-icon">
      <div className="rfx-flag-icon__inner">
        {children ?? <h2>Flag Icon</h2>}
      </div>
    </section>
  );
}
export default RfxFlagIcon;
