// Pipeline stage 2 — scrape: fetch full page content + media catalog.
// Assumes discover already populated enrichment_sources.branding & .copy.
import { emit } from "../lib/emit.mjs";
export async function scrape(packet, { firecrawlKey }) {
  emit("scrape", "start", {});
  const src = packet.enrichment_sources ?? {};
  const media = [];
  const branding = src.branding?.value;
  if (branding?.images) {
    for (const [k, v] of Object.entries(branding.images)) {
      if (v && typeof v === "string") media.push({ kind: k, url: v });
    }
  }
  packet.media = { catalog: media };
  emit("scrape", "done", { media: media.length });
  return packet;
}
