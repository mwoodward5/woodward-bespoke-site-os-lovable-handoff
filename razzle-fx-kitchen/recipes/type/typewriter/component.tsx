import "./styles.css";
import type { ReactNode } from "react";
/**
 * Typewriter — type recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxTypewriter({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-typewriter">
      <div className="rfx-typewriter__inner">
        {children ?? <h2>Typewriter</h2>}
      </div>
    </section>
  );
}
export default RfxTypewriter;
