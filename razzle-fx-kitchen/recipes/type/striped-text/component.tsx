import "./styles.css";
import type { ReactNode } from "react";
/**
 * Striped Text — type recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxStripedText({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-striped-text">
      <div className="rfx-striped-text__inner">
        {children ?? <h2>Striped Text</h2>}
      </div>
    </section>
  );
}
export default RfxStripedText;
