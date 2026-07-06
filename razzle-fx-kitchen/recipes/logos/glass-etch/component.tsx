import "./styles.css";
import type { ReactNode } from "react";
/**
 * Glass Etch — logos recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxGlassEtch({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-glass-etch">
      <div className="rfx-glass-etch__inner">
        {children ?? <h2>Glass Etch</h2>}
      </div>
    </section>
  );
}
export default RfxGlassEtch;
