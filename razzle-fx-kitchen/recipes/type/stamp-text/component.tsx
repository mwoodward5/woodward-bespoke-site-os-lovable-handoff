import "./styles.css";
import type { ReactNode } from "react";
/**
 * Stamp Text — type recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxStampText({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-stamp-text">
      <div className="rfx-stamp-text__inner">
        {children ?? <h2>Stamp Text</h2>}
      </div>
    </section>
  );
}
export default RfxStampText;
