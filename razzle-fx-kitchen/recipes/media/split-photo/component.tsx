import "./styles.css";
import type { ReactNode } from "react";
/**
 * Split Photo — media recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxSplitPhoto({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-split-photo">
      <div className="rfx-split-photo__inner">
        {children ?? <h2>Split Photo</h2>}
      </div>
    </section>
  );
}
export default RfxSplitPhoto;
