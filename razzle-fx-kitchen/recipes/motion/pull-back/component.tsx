import "./styles.css";
import type { ReactNode } from "react";
/**
 * Pull Back — motion recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxPullBack({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-pull-back">
      <div className="rfx-pull-back__inner">
        {children ?? <h2>Pull Back</h2>}
      </div>
    </section>
  );
}
export default RfxPullBack;
