import "./styles.css";
import type { ReactNode } from "react";
/**
 * Curl Page — motion recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxCurlPage({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-curl-page">
      <div className="rfx-curl-page__inner">
        {children ?? <h2>Curl Page</h2>}
      </div>
    </section>
  );
}
export default RfxCurlPage;
