import "./styles.css";
import type { ReactNode } from "react";
/**
 * Lens Flare — logos recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxLensFlare({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-lens-flare">
      <div className="rfx-lens-flare__inner">
        {children ?? <h2>Lens Flare</h2>}
      </div>
    </section>
  );
}
export default RfxLensFlare;
