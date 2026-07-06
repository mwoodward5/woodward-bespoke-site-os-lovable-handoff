import "./styles.css";
import type { ReactNode } from "react";
/**
 * Video Scrub — media recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxVideoScrub({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-video-scrub">
      <div className="rfx-video-scrub__inner">
        {children ?? <h2>Video Scrub</h2>}
      </div>
    </section>
  );
}
export default RfxVideoScrub;
