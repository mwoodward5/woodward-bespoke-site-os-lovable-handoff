import "./styles.css";
import type { ReactNode } from "react";
/**
 * Broken Grid Photos — media recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxBrokenGridPhotos({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-broken-grid-photos">
      <div className="rfx-broken-grid-photos__inner">
        {children ?? <h2>Broken Grid Photos</h2>}
      </div>
    </section>
  );
}
export default RfxBrokenGridPhotos;
