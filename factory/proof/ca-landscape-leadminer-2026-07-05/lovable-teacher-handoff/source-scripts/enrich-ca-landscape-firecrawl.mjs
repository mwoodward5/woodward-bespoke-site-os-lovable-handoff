import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(__dirname, "..");
const proofRoot = path.join(__dirname, "proof", "ca-landscape-leadminer-2026-07-05");
const sourceQueuePath = path.join(proofRoot, "ca-landscape-build-queue.json");
const enrichedQueuePath = path.join(proofRoot, "ca-landscape-build-queue-enriched.json");
const enrichmentProofPath = path.join(proofRoot, "ca-landscape-firecrawl-enrichment-2026-07-06.json");
const FIRECRAWL_BASE = "https://api.firecrawl.dev/v2";

const LOCAL_ENV_PATHS = [
  path.join(workspaceRoot, "lovable-bulk-ops-command-center", ".env.local"),
  "C:\\Users\\Main\\AppData\\Local\\hermes\\.env",
  "C:\\Users\\Main\\LocalAI\\.env",
];

function loadEnvKey(name) {
  if (process.env[name]) return process.env[name].trim();
  for (const file of LOCAL_ENV_PATHS) {
    try {
      if (!existsSync(file)) continue;
      const text = readFileSync(file, "utf8");
      const match = text.match(new RegExp(`^${name}=([^\\r\\n]+)`, "m"));
      const value = match?.[1]?.trim().replace(/^["']|["']$/g, "");
      if (value) {
        process.env[name] = value;
        return value;
      }
    } catch {
      // fail soft
    }
  }
  return "";
}

function clean(value = "") {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function absoluteUrl(value, base) {
  if (!value || /^data:|^mailto:|^tel:/i.test(value)) return "";
  try {
    return new URL(value, base).toString();
  } catch {
    return "";
  }
}

function uniqueByUrl(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = String(item.url || "").replace(/\?.*$/, "").toLowerCase();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function extractImageCandidates(html = "", baseUrl = "") {
  const out = [];
  const push = (raw, context) => {
    const url = absoluteUrl(clean(raw).split(",")[0].split(/\s+/)[0], baseUrl);
    if (!url || !/^https?:/i.test(url)) return;
    if (/\.(ico|svg|pdf|css|js|woff2?|zip|docx?|xlsx?)(\?|$)/i.test(url)) return;
    if (!/\.(png|jpe?g|webp|gif|avif)(\?|$)/i.test(url)) return;
    out.push({ url, context: clean(context).slice(0, 180), source: "firecrawl_html" });
  };

  for (const match of html.matchAll(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)/gi)) {
    push(match[1], "og:image");
  }
  for (const match of html.matchAll(/<img\b([^>]+)>/gi)) {
    const attrs = match[1];
    const src = attrs.match(/\b(?:src|data-src|data-lazy-src|data-original)=["']([^"']+)["']/i)?.[1];
    const srcset = attrs.match(/\bsrcset=["']([^"']+)["']/i)?.[1];
    push(src || srcset || "", attrs);
  }
  for (const match of html.matchAll(/<source\b[^>]*\bsrcset=["']([^"']+)["'][^>]*>/gi)) {
    push(match[1], "source srcset");
  }
  for (const match of html.matchAll(/url\(["']?([^"')]+)["']?\)/gi)) {
    push(match[1], "css background");
  }

  return uniqueByUrl(out).slice(0, 24);
}

function extractLogoCandidates(html = "", baseUrl = "") {
  const out = [];
  const push = (raw, context, source = "html") => {
    const url = absoluteUrl(raw, baseUrl);
    if (!url || !/^https?:/i.test(url)) return;
    if (/wix\.com\/favicon\.ico/i.test(url)) return;
    out.push({ url, context: clean(context).slice(0, 180), source });
  };

  for (const match of html.matchAll(/<link\b([^>]+)>/gi)) {
    const attrs = match[1];
    if (!/icon|apple-touch-icon|mask-icon/i.test(attrs)) continue;
    push(attrs.match(/\bhref=["']([^"']+)["']/i)?.[1] || "", attrs, "icon_link");
  }
  for (const match of html.matchAll(/<img\b([^>]+)>/gi)) {
    const attrs = match[1];
    if (!/logo|brand|site-title|custom-logo|header|masthead/i.test(attrs)) continue;
    push(attrs.match(/\b(?:src|data-src|data-lazy-src)=["']([^"']+)["']/i)?.[1] || "", attrs, "logo_img");
  }

  return uniqueByUrl(out).slice(0, 10);
}

function extractColors(html = "", branding = null) {
  const colors = [];
  const push = (value) => {
    const color = String(value || "").toLowerCase();
    if (!/^#[0-9a-f]{3,8}$/i.test(color)) return;
    if (/^#(?:fff|ffffff|000|000000|111|222|333|444|555|666|777|888|999|aaa|bbb|ccc|ddd|eee|f7f7f7|f8f8f8|fafafa)$/.test(color)) return;
    if (!colors.includes(color)) colors.push(color);
  };
  for (const color of html.matchAll(/#[0-9a-f]{3,8}\b/gi)) push(color[0]);
  const brandingColors = Array.isArray(branding?.colors)
    ? branding.colors
    : branding?.colors && typeof branding.colors === "object"
      ? Object.values(branding.colors).flat()
      : [];
  for (const color of brandingColors) push(typeof color === "string" ? color : color?.hex || color?.value);
  return colors.slice(0, 12);
}

async function firecrawl(pathname, body) {
  const key = loadEnvKey("FIRECRAWL_API_KEY");
  if (!key) return { ok: false, status: 0, reason: "FIRECRAWL_API_KEY missing" };
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 45000);
  try {
    const res = await fetch(`${FIRECRAWL_BASE}${pathname}`, {
      method: "POST",
      signal: controller.signal,
      headers: {
        authorization: `Bearer ${key}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      return { ok: false, status: res.status, reason: json?.error || json?.message || `Firecrawl ${res.status}` };
    }
    return { ok: true, status: res.status, data: json.data || json };
  } catch (error) {
    return { ok: false, status: 0, reason: error.name === "AbortError" ? "Firecrawl timeout" : error.message };
  } finally {
    clearTimeout(timer);
  }
}

async function searchBusiness(packet) {
  const query = `${packet.business.name} ${packet.business.city} CA landscape official website logo photos`;
  const result = await firecrawl("/search", { query, limit: 5 });
  const rows = Array.isArray(result.data) ? result.data : Array.isArray(result.data?.results) ? result.data.results : [];
  return {
    ok: result.ok,
    reason: result.reason || "",
    rows: rows.map((row) => ({
      title: row.title || row.metadata?.title || "",
      url: row.url || row.link || "",
      description: row.description || row.snippet || "",
    })).filter((row) => /^https?:/i.test(row.url)).slice(0, 5),
  };
}

async function scrapeUrl(url) {
  return firecrawl("/scrape", {
    url,
    formats: ["html", "markdown", "screenshot", "branding", "links"],
    onlyMainContent: false,
    waitFor: 2500,
    timeout: 35000,
  });
}

async function enrichPacket(packet) {
  const search = await searchBusiness(packet);
  const candidateUrls = [
    packet.business.website,
    packet.source?.finalUrl,
    ...search.rows.map((row) => row.url),
  ].filter(Boolean);
  const seenUrls = [...new Set(candidateUrls.map((url) => {
    try {
      return new URL(url).toString();
    } catch {
      return "";
    }
  }).filter(Boolean))].slice(0, 4);

  const attempts = [];
  for (const url of seenUrls) {
    const scrape = await scrapeUrl(url);
    const data = scrape.data || {};
    const html = data.html || "";
    const branding = data.branding || null;
    const logos = [
      ...extractLogoCandidates(html, url),
      ...(branding?.logos || []).map((logo) => ({
        url: typeof logo === "string" ? logo : logo?.url || logo?.src || "",
        context: "Firecrawl branding logo",
        source: "firecrawl_branding",
      })),
    ].filter((item) => /^https?:/i.test(item.url || ""));
    const images = extractImageCandidates(html, url);
    const colors = extractColors(html, branding);
    attempts.push({
      url,
      ok: scrape.ok,
      status: scrape.status,
      reason: scrape.reason || "",
      title: data.metadata?.title || data.metadata?.ogTitle || "",
      description: data.metadata?.description || data.metadata?.ogDescription || "",
      screenshot: data.screenshot || "",
      brandingPresent: Boolean(branding),
      logoCandidates: uniqueByUrl(logos),
      imageCandidates: images,
      brandColors: colors,
      links: Array.isArray(data.links) ? data.links.slice(0, 12) : [],
    });
  }

  const best = attempts
    .filter((item) => item.ok)
    .sort((a, b) => (b.logoCandidates.length * 4 + b.imageCandidates.length + b.brandColors.length) - (a.logoCandidates.length * 4 + a.imageCandidates.length + a.brandColors.length))[0]
    || attempts[0]
    || null;

  const mergedSource = {
    ...packet.source,
    firecrawlEnrichment: {
      configured: Boolean(loadEnvKey("FIRECRAWL_API_KEY")),
      search,
      attempts: attempts.map((item) => ({
        url: item.url,
        ok: item.ok,
        status: item.status,
        reason: item.reason,
        title: item.title,
        hasScreenshot: Boolean(item.screenshot),
        brandingPresent: item.brandingPresent,
        logoCount: item.logoCandidates.length,
        imageCount: item.imageCandidates.length,
        colorCount: item.brandColors.length,
      })),
      selectedUrl: best?.url || "",
    },
    logoCandidates: uniqueByUrl([...(best?.logoCandidates || []), ...(packet.source?.logoCandidates || [])]),
    imageCandidates: uniqueByUrl([...(best?.imageCandidates || []), ...(packet.source?.imageCandidates || [])]),
    brandColors: [...new Set([...(best?.brandColors || []), ...(packet.source?.brandColors || [])])].slice(0, 12),
    renderedScreenshot: best?.screenshot || packet.source?.renderedScreenshot || "",
  };

  return {
    ...packet,
    source: mergedSource,
  };
}

const queue = JSON.parse(readFileSync(sourceQueuePath, "utf8"));
mkdirSync(proofRoot, { recursive: true });
const enriched = [];
for (const packet of queue) {
  enriched.push(await enrichPacket(packet));
}

writeFileSync(enrichedQueuePath, `${JSON.stringify(enriched, null, 2)}\n`);
writeFileSync(enrichmentProofPath, `${JSON.stringify({
  generatedAt: new Date().toISOString(),
  firecrawlConfigured: Boolean(loadEnvKey("FIRECRAWL_API_KEY")),
  sourceQueuePath,
  enrichedQueuePath,
  businesses: enriched.map((packet) => ({
    name: packet.business.name,
    website: packet.business.website,
    selectedUrl: packet.source.firecrawlEnrichment?.selectedUrl || "",
    logoCandidates: packet.source.logoCandidates?.length || 0,
    imageCandidates: packet.source.imageCandidates?.length || 0,
    brandColors: packet.source.brandColors || [],
    attempts: packet.source.firecrawlEnrichment?.attempts || [],
  })),
}, null, 2)}\n`);

console.log(JSON.stringify({
  ok: true,
  firecrawlConfigured: Boolean(loadEnvKey("FIRECRAWL_API_KEY")),
  enrichedQueuePath,
  businesses: enriched.map((packet) => ({
    name: packet.business.name,
    logos: packet.source.logoCandidates?.length || 0,
    images: packet.source.imageCandidates?.length || 0,
    colors: packet.source.brandColors?.length || 0,
    selectedUrl: packet.source.firecrawlEnrichment?.selectedUrl || "",
  })),
}, null, 2));
