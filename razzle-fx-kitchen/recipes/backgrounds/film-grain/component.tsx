import "./styles.css";
import type { ReactNode } from "react";
/**
 * Film Grain — backgrounds recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxFilmGrain({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-film-grain">
      <div className="rfx-film-grain__inner">
        {children ?? <h2>Film Grain</h2>}
      </div>
    </section>
  );
}
export default RfxFilmGrain;
