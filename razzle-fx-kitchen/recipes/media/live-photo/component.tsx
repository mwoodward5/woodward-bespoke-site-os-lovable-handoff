import "./styles.css";
import type { ReactNode } from "react";
/**
 * Live Photo — media recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxLivePhoto({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-live-photo">
      <div className="rfx-live-photo__inner">
        {children ?? <h2>Live Photo</h2>}
      </div>
    </section>
  );
}
export default RfxLivePhoto;
