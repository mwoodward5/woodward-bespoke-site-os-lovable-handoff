import "./styles.css";
import type { ReactNode } from "react";
/**
 * Tape Strip — logos recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxTapeStrip({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-tape-strip">
      <div className="rfx-tape-strip__inner">
        {children ?? <h2>Tape Strip</h2>}
      </div>
    </section>
  );
}
export default RfxTapeStrip;
