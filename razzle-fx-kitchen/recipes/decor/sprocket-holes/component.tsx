import "./styles.css";
import type { ReactNode } from "react";
/**
 * Sprocket Holes — decor recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxSprocketHoles({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-sprocket-holes">
      <div className="rfx-sprocket-holes__inner">
        {children ?? <h2>Sprocket Holes</h2>}
      </div>
    </section>
  );
}
export default RfxSprocketHoles;
