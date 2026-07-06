import "./styles.css";
import type { ReactNode } from "react";
/**
 * Skip Link — ux recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxSkipLink({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-skip-link">
      <div className="rfx-skip-link__inner">
        {children ?? <h2>Skip Link</h2>}
      </div>
    </section>
  );
}
export default RfxSkipLink;
