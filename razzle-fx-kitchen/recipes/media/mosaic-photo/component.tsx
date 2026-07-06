import "./styles.css";
import type { ReactNode } from "react";
/**
 * Mosaic Photo — media recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxMosaicPhoto({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-mosaic-photo">
      <div className="rfx-mosaic-photo__inner">
        {children ?? <h2>Mosaic Photo</h2>}
      </div>
    </section>
  );
}
export default RfxMosaicPhoto;
