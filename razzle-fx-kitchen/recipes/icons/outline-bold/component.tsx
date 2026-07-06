import "./styles.css";
import type { ReactNode } from "react";
/**
 * Outline Bold — icons recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxOutlineBold({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-outline-bold">
      <div className="rfx-outline-bold__inner">
        {children ?? <h2>Outline Bold</h2>}
      </div>
    </section>
  );
}
export default RfxOutlineBold;
