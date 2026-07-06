import "./styles.css";
import type { ReactNode } from "react";
/**
 * Art Deco — decor recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxArtDeco({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-art-deco">
      <div className="rfx-art-deco__inner">
        {children ?? <h2>Art Deco</h2>}
      </div>
    </section>
  );
}
export default RfxArtDeco;
