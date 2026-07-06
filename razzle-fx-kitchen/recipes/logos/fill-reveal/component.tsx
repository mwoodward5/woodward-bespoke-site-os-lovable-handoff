import "./styles.css";
import type { ReactNode } from "react";
/**
 * Fill Reveal — logos recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxFillReveal({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-fill-reveal">
      <div className="rfx-fill-reveal__inner">
        {children ?? <h2>Fill Reveal</h2>}
      </div>
    </section>
  );
}
export default RfxFillReveal;
