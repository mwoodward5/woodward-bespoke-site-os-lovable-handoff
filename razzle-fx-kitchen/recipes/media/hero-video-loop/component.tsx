import "./styles.css";
import type { ReactNode } from "react";
/**
 * Hero Video Loop — media recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxHeroVideoLoop({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-hero-video-loop">
      <div className="rfx-hero-video-loop__inner">
        {children ?? <h2>Hero Video Loop</h2>}
      </div>
    </section>
  );
}
export default RfxHeroVideoLoop;
