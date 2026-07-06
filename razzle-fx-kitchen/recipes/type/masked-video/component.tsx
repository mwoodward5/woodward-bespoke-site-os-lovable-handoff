import "./styles.css";
import type { ReactNode } from "react";
/**
 * Masked Video — type recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxMaskedVideo({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-masked-video">
      <div className="rfx-masked-video__inner">
        {children ?? <h2>Masked Video</h2>}
      </div>
    </section>
  );
}
export default RfxMaskedVideo;
