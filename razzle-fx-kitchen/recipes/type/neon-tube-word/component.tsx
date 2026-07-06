import "./styles.css";
import type { ReactNode } from "react";
/**
 * Neon Tube Word — type recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxNeonTubeWord({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-neon-tube-word">
      <div className="rfx-neon-tube-word__inner">
        {children ?? <h2>Neon Tube Word</h2>}
      </div>
    </section>
  );
}
export default RfxNeonTubeWord;
