import "./styles.css";
import type { ReactNode } from "react";
/**
 * Chroma Wash — logos recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxChromaWash({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-chroma-wash">
      <div className="rfx-chroma-wash__inner">
        {children ?? <h2>Chroma Wash</h2>}
      </div>
    </section>
  );
}
export default RfxChromaWash;
