import "./styles.css";
import type { ReactNode } from "react";
/**
 * Shake Hover — type recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxShakeHover({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-shake-hover">
      <div className="rfx-shake-hover__inner">
        {children ?? <h2>Shake Hover</h2>}
      </div>
    </section>
  );
}
export default RfxShakeHover;
