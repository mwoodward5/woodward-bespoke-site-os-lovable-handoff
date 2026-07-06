import "./styles.css";
import type { ReactNode } from "react";
/**
 * Pixel Icon — icons recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxPixelIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-pixel-icon">
      <div className="rfx-pixel-icon__inner">
        {children ?? <h2>Pixel Icon</h2>}
      </div>
    </section>
  );
}
export default RfxPixelIcon;
