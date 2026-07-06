import "./styles.css";
import type { ReactNode } from "react";
/**
 * Fill Video — type recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxFillVideo({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-fill-video">
      <div className="rfx-fill-video__inner">
        {children ?? <h2>Fill Video</h2>}
      </div>
    </section>
  );
}
export default RfxFillVideo;
