import "./styles.css";
import type { ReactNode } from "react";
/**
 * Video Marquee — media recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxVideoMarquee({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-video-marquee">
      <div className="rfx-video-marquee__inner">
        {children ?? <h2>Video Marquee</h2>}
      </div>
    </section>
  );
}
export default RfxVideoMarquee;
