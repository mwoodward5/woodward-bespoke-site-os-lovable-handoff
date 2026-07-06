import "./styles.css";
import type { ReactNode } from "react";
/**
 * Hex Tile — backgrounds recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxHexTile({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-hex-tile">
      <div className="rfx-hex-tile__inner">
        {children ?? <h2>Hex Tile</h2>}
      </div>
    </section>
  );
}
export default RfxHexTile;
