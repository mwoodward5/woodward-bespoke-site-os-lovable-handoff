import "./styles.css";
import type { ReactNode } from "react";
/**
 * Key Light — surfaces recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxKeyLight({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-key-light">
      <div className="rfx-key-light__inner">
        {children ?? <h2>Key Light</h2>}
      </div>
    </section>
  );
}
export default RfxKeyLight;
