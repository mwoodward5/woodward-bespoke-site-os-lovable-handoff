import "./styles.css";
import type { ReactNode } from "react";
/**
 * Outline Regular — icons recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxOutlineRegular({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-outline-regular">
      <div className="rfx-outline-regular__inner">
        {children ?? <h2>Outline Regular</h2>}
      </div>
    </section>
  );
}
export default RfxOutlineRegular;
