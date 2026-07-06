import "./styles.css";
import type { ReactNode } from "react";
/**
 * Video Duotone — media recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxVideoDuotone({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-video-duotone">
      <div className="rfx-video-duotone__inner">
        {children ?? <h2>Video Duotone</h2>}
      </div>
    </section>
  );
}
export default RfxVideoDuotone;
