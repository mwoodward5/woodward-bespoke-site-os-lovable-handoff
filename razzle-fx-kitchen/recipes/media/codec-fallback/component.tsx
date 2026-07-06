import "./styles.css";
import type { ReactNode } from "react";
/**
 * Codec Fallback — media recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxCodecFallback({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-codec-fallback">
      <div className="rfx-codec-fallback__inner">
        {children ?? <h2>Codec Fallback</h2>}
      </div>
    </section>
  );
}
export default RfxCodecFallback;
