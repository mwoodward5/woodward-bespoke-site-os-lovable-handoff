import "./styles.css";
import type { ReactNode } from "react";
/**
 * Handwritten — logos recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxHandwritten({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-handwritten">
      <div className="rfx-handwritten__inner">
        {children ?? <h2>Handwritten</h2>}
      </div>
    </section>
  );
}
export default RfxHandwritten;
