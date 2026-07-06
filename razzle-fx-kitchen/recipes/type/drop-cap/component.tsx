import "./styles.css";
import type { ReactNode } from "react";
/**
 * Drop Cap — type recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxDropCap({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-drop-cap">
      <div className="rfx-drop-cap__inner">
        {children ?? <h2>Drop Cap</h2>}
      </div>
    </section>
  );
}
export default RfxDropCap;
