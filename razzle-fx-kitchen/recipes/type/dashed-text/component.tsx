import "./styles.css";
import type { ReactNode } from "react";
/**
 * Dashed Text — type recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxDashedText({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-dashed-text">
      <div className="rfx-dashed-text__inner">
        {children ?? <h2>Dashed Text</h2>}
      </div>
    </section>
  );
}
export default RfxDashedText;
