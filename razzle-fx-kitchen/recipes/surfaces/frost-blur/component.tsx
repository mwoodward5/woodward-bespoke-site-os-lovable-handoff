import "./styles.css";
import type { ReactNode } from "react";
/**
 * Frost Blur — surfaces recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxFrostBlur({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-frost-blur">
      <div className="rfx-frost-blur__inner">
        {children ?? <h2>Frost Blur</h2>}
      </div>
    </section>
  );
}
export default RfxFrostBlur;
