import "./styles.css";
import type { ReactNode } from "react";
/**
 * Seal Stamp — logos recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxSealStamp({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-seal-stamp">
      <div className="rfx-seal-stamp__inner">
        {children ?? <h2>Seal Stamp</h2>}
      </div>
    </section>
  );
}
export default RfxSealStamp;
