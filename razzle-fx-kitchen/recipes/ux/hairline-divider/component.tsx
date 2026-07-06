import "./styles.css";
import type { ReactNode } from "react";
/**
 * Hairline Divider — ux recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxHairlineDivider({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-hairline-divider">
      <div className="rfx-hairline-divider__inner">
        {children ?? <h2>Hairline Divider</h2>}
      </div>
    </section>
  );
}
export default RfxHairlineDivider;
