import "./styles.css";
import type { ReactNode } from "react";
/**
 * Hatch Icon — icons recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxHatchIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-hatch-icon">
      <div className="rfx-hatch-icon__inner">
        {children ?? <h2>Hatch Icon</h2>}
      </div>
    </section>
  );
}
export default RfxHatchIcon;
