import "./styles.css";
import type { ReactNode } from "react";
/**
 * Monogram Lock — logos recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxMonogramLock({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-monogram-lock">
      <div className="rfx-monogram-lock__inner">
        {children ?? <h2>Monogram Lock</h2>}
      </div>
    </section>
  );
}
export default RfxMonogramLock;
