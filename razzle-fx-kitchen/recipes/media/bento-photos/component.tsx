import "./styles.css";
import type { ReactNode } from "react";
/**
 * Bento Photos — media recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxBentoPhotos({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-bento-photos">
      <div className="rfx-bento-photos__inner">
        {children ?? <h2>Bento Photos</h2>}
      </div>
    </section>
  );
}
export default RfxBentoPhotos;
