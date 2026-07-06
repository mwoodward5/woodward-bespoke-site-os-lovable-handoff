import "./styles.css";
import type { ReactNode } from "react";
/**
 * Video Cover — media recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxVideoCover({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-video-cover">
      <div className="rfx-video-cover__inner">
        {children ?? <h2>Video Cover</h2>}
      </div>
    </section>
  );
}
export default RfxVideoCover;
