import "./styles.css";
import type { ReactNode } from "react";
/**
 * Rain Streak — backgrounds recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxRainStreak({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-rain-streak">
      <div className="rfx-rain-streak__inner">
        {children ?? <h2>Rain Streak</h2>}
      </div>
    </section>
  );
}
export default RfxRainStreak;
