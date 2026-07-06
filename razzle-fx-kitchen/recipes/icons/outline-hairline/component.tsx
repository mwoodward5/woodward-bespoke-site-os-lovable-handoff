import "./styles.css";
import type { ReactNode } from "react";
/**
 * Outline Hairline — icons recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxOutlineHairline({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-outline-hairline">
      <div className="rfx-outline-hairline__inner">
        {children ?? <h2>Outline Hairline</h2>}
      </div>
    </section>
  );
}
export default RfxOutlineHairline;
