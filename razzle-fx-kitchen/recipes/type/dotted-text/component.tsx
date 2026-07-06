import "./styles.css";
import type { ReactNode } from "react";
/**
 * Dotted Text — type recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxDottedText({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-dotted-text">
      <div className="rfx-dotted-text__inner">
        {children ?? <h2>Dotted Text</h2>}
      </div>
    </section>
  );
}
export default RfxDottedText;
