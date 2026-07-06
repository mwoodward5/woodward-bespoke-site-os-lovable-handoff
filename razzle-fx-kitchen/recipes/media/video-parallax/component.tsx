import "./styles.css";
import type { ReactNode } from "react";
/**
 * Video Parallax — media recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxVideoParallax({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-video-parallax">
      <div className="rfx-video-parallax__inner">
        {children ?? <h2>Video Parallax</h2>}
      </div>
    </section>
  );
}
export default RfxVideoParallax;
