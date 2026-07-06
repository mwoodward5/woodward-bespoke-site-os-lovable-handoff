import "./styles.css";
import type { ReactNode } from "react";
/**
 * Masonry Photos — media recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxMasonryPhotos({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-masonry-photos">
      <div className="rfx-masonry-photos__inner">
        {children ?? <h2>Masonry Photos</h2>}
      </div>
    </section>
  );
}
export default RfxMasonryPhotos;
