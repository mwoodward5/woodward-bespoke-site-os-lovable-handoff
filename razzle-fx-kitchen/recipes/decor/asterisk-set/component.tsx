import "./styles.css";
import type { ReactNode } from "react";
/**
 * Asterisk Set — decor recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxAsteriskSet({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-asterisk-set">
      <div className="rfx-asterisk-set__inner">
        {children ?? <h2>Asterisk Set</h2>}
      </div>
    </section>
  );
}
export default RfxAsteriskSet;
