import "./styles.css";
import type { ReactNode } from "react";
/**
 * Carved Stone — logos recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxCarvedStone({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-carved-stone">
      <div className="rfx-carved-stone__inner">
        {children ?? <h2>Carved Stone</h2>}
      </div>
    </section>
  );
}
export default RfxCarvedStone;
