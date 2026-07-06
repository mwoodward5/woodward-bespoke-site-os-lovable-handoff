import "./styles.css";
import type { ReactNode } from "react";
/**
 * Hard Diagonal — backgrounds recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxHardDiagonal({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-hard-diagonal">
      <div className="rfx-hard-diagonal__inner">
        {children ?? <h2>Hard Diagonal</h2>}
      </div>
    </section>
  );
}
export default RfxHardDiagonal;
