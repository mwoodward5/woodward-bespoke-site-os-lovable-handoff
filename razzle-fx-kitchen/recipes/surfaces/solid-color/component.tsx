import "./styles.css";
import type { ReactNode } from "react";
/**
 * Solid Color — surfaces recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxSolidColor({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-solid-color">
      <div className="rfx-solid-color__inner">
        {children ?? <h2>Solid Color</h2>}
      </div>
    </section>
  );
}
export default RfxSolidColor;
