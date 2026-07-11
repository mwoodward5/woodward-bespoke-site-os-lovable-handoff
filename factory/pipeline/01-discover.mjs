// Pipeline stage 1 — discover: run Firecrawl + GBP + local SERP to build the
// initial enrichment_sources map. Emits status events for the console SSE.
import { emit } from "../lib/emit.mjs";

export async function discover(packet, { firecrawlKey, gbpEnabled, serpEnabled }) {
  emit("discover", "start", { slug: packet.slug });
  const sources = packet.enrichment_sources ?? {};

  // Firecrawl branding + content
  if (packet.business.current_website && firecrawlKey) {
    emit("discover", "firecrawl", { url: packet.business.current_website });
    const r = await fetch("https://api.firecrawl.dev/v2/scrape", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${firecrawlKey}`,
      },
      body: JSON.stringify({
        url: packet.business.current_website,
        // images + full page (not onlyMainContent): galleries, headers, and
        // trust strips are where the prospect's real photos and logo live.
        formats: ["markdown", "branding", "links", "images", { type: "summary" }],
        onlyMainContent: false,
      }),
    });
    if (r.ok) {
      const raw = await r.json();
      const data = raw.data || raw; // firecrawl v2 may wrap in .data
      sources.branding = { source: "firecrawl-branding", confidence: 0.85, value: data.branding };
      sources.copy = { source: "firecrawl", confidence: 0.9, value: data.markdown };
      if (data.branding?.logo) {
        sources.logo = { source: "firecrawl-branding", confidence: 0.9, value: data.branding.logo };
      }
      const images = (Array.isArray(data.images) ? data.images : [])
        .map((item) => (typeof item === "string" ? item : item?.url || item?.src || ""))
        .filter(Boolean);
      if (images.length) sources.photos = { source: "firecrawl", confidence: 0.85, value: images };
    } else {
      emit("discover", "firecrawl-error", { status: r.status });
    }
  }

  // GBP — user-supplied URL parse (public info only). Real GBP API requires
  // operator OAuth; when absent, we scrape the public page via Firecrawl.
  if (packet.business.gbp_url && gbpEnabled && firecrawlKey) {
    emit("discover", "gbp", { url: packet.business.gbp_url });
    const r = await fetch("https://api.firecrawl.dev/v2/scrape", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${firecrawlKey}`,
      },
      body: JSON.stringify({
        url: packet.business.gbp_url,
        formats: ["markdown", "links"],
        onlyMainContent: false,
      }),
    });
    if (r.ok) {
      const data = await r.json();
      sources.gbp_raw = { source: "gbp", confidence: 0.95, value: data.markdown };
    }
  }

  // Local SERP — top 5 local competitors for name+city (used for
  // differentiation cues, not copied). Optional.
  if (serpEnabled && firecrawlKey) {
    emit("discover", "serp", {});
    const r = await fetch("https://api.firecrawl.dev/v2/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${firecrawlKey}`,
      },
      body: JSON.stringify({
        query: `${packet.business.category} ${packet.business.city} ${packet.business.state}`,
        limit: 5,
      }),
    });
    if (r.ok) {
      sources.serp = { source: "serp", confidence: 0.7, value: await r.json() };
    }
  }

  packet.enrichment_sources = sources;
  emit("discover", "done", { sources: Object.keys(sources) });
  return packet;
}
