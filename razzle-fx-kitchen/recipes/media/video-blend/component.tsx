import "./styles.css";
import type { ReactNode } from "react";
/**
 * Video Blend — media recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxVideoBlend({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-video-blend">
      <div className="rfx-video-blend__inner">
        {children ?? <h2>Video Blend</h2>}
      </div>
    </section>
  );
}
export default RfxVideoBlend;
