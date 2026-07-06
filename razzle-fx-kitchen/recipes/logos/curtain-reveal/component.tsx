import "./styles.css";
import type { ReactNode } from "react";
/**
 * Curtain Reveal — logos recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxCurtainReveal({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-curtain-reveal">
      <div className="rfx-curtain-reveal__inner">
        {children ?? <h2>Curtain Reveal</h2>}
      </div>
    </section>
  );
}
export default RfxCurtainReveal;
