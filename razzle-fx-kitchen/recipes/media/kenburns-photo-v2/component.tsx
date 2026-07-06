import "./styles.css";
import type { ReactNode } from "react";
/**
 * Kenburns Photo V2 — media recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxKenburnsPhotoV2({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-kenburns-photo-v2">
      <div className="rfx-kenburns-photo-v2__inner">
        {children ?? <h2>Kenburns Photo V2</h2>}
      </div>
    </section>
  );
}
export default RfxKenburnsPhotoV2;
