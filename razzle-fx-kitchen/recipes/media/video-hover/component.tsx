import "./styles.css";
import type { ReactNode } from "react";
/**
 * Video Hover — media recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxVideoHover({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-video-hover">
      <div className="rfx-video-hover__inner">
        {children ?? <h2>Video Hover</h2>}
      </div>
    </section>
  );
}
export default RfxVideoHover;
