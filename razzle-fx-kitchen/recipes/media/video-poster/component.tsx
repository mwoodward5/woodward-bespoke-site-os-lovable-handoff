import "./styles.css";
import type { ReactNode } from "react";
/**
 * Video Poster — media recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxVideoPoster({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-video-poster">
      <div className="rfx-video-poster__inner">
        {children ?? <h2>Video Poster</h2>}
      </div>
    </section>
  );
}
export default RfxVideoPoster;
