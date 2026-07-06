import "./styles.css";
import type { ReactNode } from "react";
/**
 * Typewriter Key — logos recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxTypewriterKey({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-typewriter-key">
      <div className="rfx-typewriter-key__inner">
        {children ?? <h2>Typewriter Key</h2>}
      </div>
    </section>
  );
}
export default RfxTypewriterKey;
