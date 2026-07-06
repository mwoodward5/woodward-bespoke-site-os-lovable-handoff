import "./styles.css";
import type { ReactNode } from "react";
/**
 * Envelope Fold — decor recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxEnvelopeFold({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-envelope-fold">
      <div className="rfx-envelope-fold__inner">
        {children ?? <h2>Envelope Fold</h2>}
      </div>
    </section>
  );
}
export default RfxEnvelopeFold;
