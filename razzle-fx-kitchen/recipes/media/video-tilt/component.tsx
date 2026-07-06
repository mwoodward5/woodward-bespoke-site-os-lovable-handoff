import "./styles.css";
import type { ReactNode } from "react";
/**
 * Video Tilt — media recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxVideoTilt({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-video-tilt">
      <div className="rfx-video-tilt__inner">
        {children ?? <h2>Video Tilt</h2>}
      </div>
    </section>
  );
}
export default RfxVideoTilt;
