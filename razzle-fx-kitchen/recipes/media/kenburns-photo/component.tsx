import "./styles.css";
import type { ReactNode } from "react";
/**
 * Kenburns Photo — media recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxKenburnsPhoto({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-kenburns-photo">
      <div className="rfx-kenburns-photo__inner">
        {children ?? <h2>Kenburns Photo</h2>}
      </div>
    </section>
  );
}
export default RfxKenburnsPhoto;
