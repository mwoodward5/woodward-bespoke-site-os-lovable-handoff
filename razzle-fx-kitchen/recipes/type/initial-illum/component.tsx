import "./styles.css";
import type { ReactNode } from "react";
/**
 * Initial Illum — type recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxInitialIllum({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-initial-illum">
      <div className="rfx-initial-illum__inner">
        {children ?? <h2>Initial Illum</h2>}
      </div>
    </section>
  );
}
export default RfxInitialIllum;
