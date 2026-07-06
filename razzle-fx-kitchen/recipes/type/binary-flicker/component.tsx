import "./styles.css";
import type { ReactNode } from "react";
/**
 * Binary Flicker — type recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxBinaryFlicker({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-binary-flicker">
      <div className="rfx-binary-flicker__inner">
        {children ?? <h2>Binary Flicker</h2>}
      </div>
    </section>
  );
}
export default RfxBinaryFlicker;
