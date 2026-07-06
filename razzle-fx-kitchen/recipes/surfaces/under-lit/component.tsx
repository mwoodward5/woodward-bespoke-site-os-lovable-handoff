import "./styles.css";
import type { ReactNode } from "react";
/**
 * Under Lit — surfaces recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxUnderLit({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-under-lit">
      <div className="rfx-under-lit__inner">
        {children ?? <h2>Under Lit</h2>}
      </div>
    </section>
  );
}
export default RfxUnderLit;
