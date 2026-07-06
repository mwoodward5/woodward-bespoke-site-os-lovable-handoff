import "./styles.css";
import type { ReactNode } from "react";
/**
 * Pixel Photo — media recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxPixelPhoto({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-pixel-photo">
      <div className="rfx-pixel-photo__inner">
        {children ?? <h2>Pixel Photo</h2>}
      </div>
    </section>
  );
}
export default RfxPixelPhoto;
