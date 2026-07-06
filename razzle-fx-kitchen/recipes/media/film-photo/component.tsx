import "./styles.css";
import type { ReactNode } from "react";
/**
 * Film Photo — media recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxFilmPhoto({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-film-photo">
      <div className="rfx-film-photo__inner">
        {children ?? <h2>Film Photo</h2>}
      </div>
    </section>
  );
}
export default RfxFilmPhoto;
