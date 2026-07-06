import "./styles.css";
import type { ReactNode } from "react";
/**
 * Contact Sheet — media recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxContactSheet({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-contact-sheet">
      <div className="rfx-contact-sheet__inner">
        {children ?? <h2>Contact Sheet</h2>}
      </div>
    </section>
  );
}
export default RfxContactSheet;
