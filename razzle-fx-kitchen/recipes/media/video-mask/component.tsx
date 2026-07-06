import "./styles.css";
import type { ReactNode } from "react";
/**
 * Video Mask — media recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxVideoMask({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-video-mask">
      <div className="rfx-video-mask__inner">
        {children ?? <h2>Video Mask</h2>}
      </div>
    </section>
  );
}
export default RfxVideoMask;
