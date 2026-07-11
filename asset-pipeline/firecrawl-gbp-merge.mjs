// Firecrawl + GBP merger. Reads discover-stage outputs and produces a normalized
// enrichment map with per-field source and confidence. Missing fields get a
// documented fallback marker — never invented content.
export function mergeEnrichment(packet) {
  const src = packet.enrichment_sources ?? {};
  const branding = src.branding?.value ?? {};
  const gbp = parseGbpMarkdown(src.gbp_raw?.value ?? "");

  const merged = {
    logo: pickSource(gbp.logo, src.logo?.value, branding.logo),
    colors: branding.colors ?? gbp.colors ?? null,
    services: pickSource(gbp.services, extractServices(src.copy?.value)),
    hours: gbp.hours ?? null,
    photos: gbp.photos ?? [],
    reviews: gbp.reviews ?? [],
    nap: gbp.nap ?? {
      name: packet.business.name,
      address: null,
      phone: null,
    },
    service_areas: gbp.service_areas ?? [packet.business.city],
  };

  // Record source + confidence for every field
  const sourced = {};
  for (const [k, v] of Object.entries(merged)) {
    if (v == null || (Array.isArray(v) && v.length === 0)) {
      sourced[k] = { source: "manual", confidence: 0, value: null, fallback: fallbackFor(k) };
    } else {
      const origin = gbp[k] ? "gbp" : (branding[k] ? "firecrawl-branding" : "firecrawl");
      sourced[k] = { source: origin, confidence: origin === "gbp" ? 1.0 : 0.85, value: v };
    }
  }
  packet.enrichment_sources = { ...src, ...sourced };
  return packet;
}

function pickSource(...vals) { return vals.find((v) => v != null && (!Array.isArray(v) || v.length)) ?? null; }

function parseGbpMarkdown(md) {
  if (!md) return {};
  const out = {};
  const hoursMatch = md.match(/Hours[\s\S]{0,400}?(Monday[\s\S]*?Sunday[^\n]*)/i);
  if (hoursMatch) out.hours = hoursMatch[1].trim();
  const phoneMatch = md.match(/(\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/);
  if (phoneMatch) out.nap = { phone: phoneMatch[1] };
  const reviewBlocks = [...md.matchAll(/★{3,5}[^\n]*\n([^\n]{40,300})/g)];
  if (reviewBlocks.length) out.reviews = reviewBlocks.map((m) => m[1].trim());
  return out;
}

function extractServices(copy) {
  if (typeof copy !== "string") return null;
  const lines = copy.split(/\n+/).filter((l) => /^\s*[-*•]\s/.test(l));
  if (lines.length < 3) return null;
  return lines.slice(0, 10).map((l) => l.replace(/^\s*[-*•]\s*/, "").trim());
}

function fallbackFor(field) {
  const map = {
    logo: "proposed-mark generation required; operator must confirm before deploy",
    hours: "omit hours strip; do not invent",
    reviews: "swap reviews section for services-process section",
    photos: "use Gemini branded still, never stock Unsplash",
    service_areas: "single-city footer, no county coverage claim",
  };
  return map[field] ?? "omit section";
}
