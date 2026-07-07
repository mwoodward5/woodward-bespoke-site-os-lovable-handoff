#!/usr/bin/env node
// Woodward SiteForge — SaaS server. Zero dependencies, Node 22+.
//   node app/server.mjs            → http://localhost:8787
// Production hardening notes: docs/launch/PRODUCT_ARCHITECTURE.md
import "./lib/env.mjs"; // .env.local loader — must stay the first import
import http from "node:http";
import path from "node:path";
import { readFileSync, existsSync, statSync, createReadStream } from "node:fs";
import { fileURLToPath } from "node:url";
import * as U from "./lib/util.mjs";
import * as DB from "./lib/store.mjs";
import * as Auth from "./lib/auth.mjs";
import * as Billing from "./lib/billing.mjs";
import * as Engine from "./lib/engine-adapter.mjs";
import * as Discovery from "./lib/discovery.mjs";
import { page, errorPage } from "./views/layout.mjs";
import * as Pub from "./views/pages-public.mjs";
import * as App from "./views/pages-app.mjs";

const APP_ROOT = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(APP_ROOT, "public");
const PORT = Number(process.env.PORT || 8787);
const DEV = process.env.NODE_ENV !== "production";

const MIME = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".mjs": "text/javascript", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".mp4": "video/mp4", ".txt": "text/plain; charset=utf-8", ".xml": "application/xml", ".webmanifest": "application/manifest+json", ".ico": "image/x-icon", ".woff2": "font/woff2" };

const demosPath = path.join(APP_ROOT, "data", "demos.json");
const demos = () => U.readJsonFile(demosPath, []);

// ---------- response helpers ----------
const send = (res, status, body, headers = {}) => { res.writeHead(status, { "Content-Type": "text/html; charset=utf-8", "X-Content-Type-Options": "nosniff", ...headers }); res.end(body); };
const json = (res, status, obj) => send(res, status, JSON.stringify(obj), { "Content-Type": "application/json" });
const redirect = (res, to) => { res.writeHead(303, { Location: to }); res.end(); };
const notFound = (res, user) => send(res, 404, errorPage(404, "The link may be old, or the project may have been deleted.", user));

function serveFileFrom(rootDir, relPath, res, extraHeaders = {}) {
  const clean = path.normalize(relPath).replace(/^([.][.][\\/])+/, "");
  let fp = path.resolve(rootDir, clean);
  if (!fp.startsWith(path.resolve(rootDir))) return false;
  if (existsSync(fp) && statSync(fp).isDirectory()) fp = path.join(fp, "index.html");
  if (!existsSync(fp) || !statSync(fp).isFile()) return false;
  res.writeHead(200, { "Content-Type": MIME[path.extname(fp).toLowerCase()] || "application/octet-stream", "Cache-Control": relPath.includes("preview") ? "no-store" : "public, max-age=300", ...extraHeaders });
  createReadStream(fp).pipe(res);
  return true;
}

// ---------- static meta assets ----------
const FAVICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><rect x="1" y="1" width="24" height="24" rx="6" fill="#191611"/><path d="M6 17.5 L13 6.5 L20 17.5" stroke="#C2571B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M9.5 17.5 L13 12 L16.5 17.5" stroke="#FAF6EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><circle cx="13" cy="20" r="1.4" fill="#C2571B"/></svg>`;
const OG_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#191611"/><g fill="none" stroke="#3A3428" stroke-width="1.2">${Array.from({ length: 9 }, (_, i) => `<path d="M ${700 + i * 40} -20 C ${820 + i * 40} 140, ${760 + i * 40} 300, ${900 + i * 40} 420 S ${960 + i * 40} 640, ${1140 + i * 40} 700"/>`).join("")}</g><text x="80" y="270" font-family="Georgia,serif" font-size="76" fill="#FAF6EE">SiteForge</text><text x="80" y="350" font-family="Georgia,serif" font-size="40" font-style="italic" fill="#C2571B">Forged. Graded. Live.</text><text x="80" y="540" font-family="monospace" font-size="22" fill="#9B937F">woodward software labs · type your business, get a premium site</text></svg>`;
const ROBOTS = `User-agent: *\nAllow: /\nDisallow: /dashboard\nDisallow: /p/\nDisallow: /account\nDisallow: /preview/\nDisallow: /try/\nDisallow: /dev/\nSitemap: /sitemap.xml\n`;
const LLMS = `# SiteForge — llms.txt\n# SiteForge (Woodward Software Labs) is a website builder for local businesses.\n# It discovers a business's real content (site, Google Business Profile), forges a\n# one-of-one premium website with local SEO + GEO/AEO optimization, grades every\n# build with a hard QC gate, and publishes it. Flat pricing, no credits.\n\n- Landing: /\n- Template collections: /templates\n- Pricing: /pricing\n- Support: /support\n- Privacy: /legal/privacy\n- Terms: /legal/terms\n`;
const SITEMAP = () => `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${["/", "/templates", "/pricing", "/support", "/legal/privacy", "/legal/terms", "/legal/accessibility", ...Engine.HERO_FAMILIES.map((f) => `/templates/${f.key}`)].map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}\n</urlset>\n`;
const SECURITY = `Contact: mailto:hello@woodwardsoftware.com\nPreferred-Languages: en\nPolicy: /legal/terms\n`;
const HUMANS = `SiteForge is forged by Woodward Software Labs.\nEngine: Bespoke Site OS v5 (deterministic, QC-gated).\n`;

// ---------- guards ----------
function requireUser(req, res) {
  const user = Auth.currentUser(req);
  if (!user) { redirect(res, "/login"); return null; }
  return user;
}
function ownProject(user, idv) {
  const p = DB.get("site_projects", idv);
  return p && p.user_id === user.id && p.status !== "deleted" ? p : null;
}
async function formGuard(req, res, user) {
  const body = await U.readForm(req);
  if (!Auth.csrfOk(req, body)) { send(res, 403, errorPage(403, "Session token mismatch — reload the page and try again.", user)); return null; }
  return body;
}

async function serveBlobFallback(res, prefix, rel) {
  if (!Engine.SERVERLESS) return false;
  const { blobGet, BLOB_ENABLED } = await import("./lib/blob-store.mjs");
  if (!BLOB_ENABLED()) return false;
  const clean = (rel || "index.html").replace(/\.\./g, "");
  const r = await blobGet(`${prefix}/${clean}`).catch(() => null);
  if (!r) return false;
  res.writeHead(200, { "Content-Type": r.headers.get("content-type") || "application/octet-stream", "X-Robots-Tag": "noindex", "Cache-Control": "no-store" });
  res.end(Buffer.from(await r.arrayBuffer()));
  return true;
}

// ---------- server ----------
export const handle = async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  const baseUrl = process.env.SITEFORGE_BASE_URL || `http://${req.headers.host || `localhost:${PORT}`}`;
  const p = url.pathname;
  const seg = p.split("/").filter(Boolean);
  const user = Auth.currentUser(req);

  try {
    // ----- meta/static -----
    if (p === "/healthz") return json(res, 200, { ok: true, service: "siteforge", ts: U.nowIso() });
    if (p === "/favicon.svg") return send(res, 200, FAVICON, { "Content-Type": "image/svg+xml", "Cache-Control": "public, max-age=86400" });
    if (p === "/og.png") {
      const real = path.join(PUBLIC_DIR, "og.png");
      if (existsSync(real)) return serveFileFrom(PUBLIC_DIR, "og.png", res) && undefined;
      return send(res, 200, OG_SVG, { "Content-Type": "image/svg+xml" });
    }
    if (p === "/robots.txt") return send(res, 200, ROBOTS, { "Content-Type": "text/plain" });
    if (p === "/llms.txt") return send(res, 200, LLMS, { "Content-Type": "text/plain" });
    if (p === "/sitemap.xml") return send(res, 200, SITEMAP(), { "Content-Type": "application/xml" });
    if (p === "/.well-known/security.txt" || p === "/security.txt") return send(res, 200, SECURITY, { "Content-Type": "text/plain" });
    if (p === "/humans.txt") return send(res, 200, HUMANS, { "Content-Type": "text/plain" });
    if (p === "/manifest.webmanifest") return json(res, 200, { name: "SiteForge", short_name: "SiteForge", start_url: "/", display: "standalone", background_color: "#FAF6EE", theme_color: "#191611", icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }] });
    if (req.method === "GET" && serveFileFrom(PUBLIC_DIR, p.slice(1) || "index.html", res)) return;

    // ----- generated-site serving -----
    if (seg[0] === "preview" && seg.length >= 3) {
      const u = requireUser(req, res); if (!u) return;
      const proj = ownProject(u, seg[1]); if (!proj) return notFound(res, u);
      const dir = DB.siteDirFor(seg[1], Number(seg[2]));
      if (serveFileFrom(dir, seg.slice(3).join("/") || "index.html", res, { "X-Robots-Tag": "noindex" })) return;
      if (await serveBlobFallback(res, `sites/${seg[1]}/v${Number(seg[2])}`, seg.slice(3).join("/"))) return;
      return notFound(res, u);
    }
    if (seg[0] === "try" && seg.length >= 2) {
      const tok = seg[1].replace(/[^A-Za-z0-9_-]/g, "");
      const dir = path.join(DB.TRY_DIR, tok);
      if (existsSync(dir) && Date.now() - statSync(dir).mtimeMs < 24 * 3600_000 && serveFileFrom(dir, seg.slice(2).join("/") || "index.html", res, { "X-Robots-Tag": "noindex" })) return;
      if (await serveBlobFallback(res, `try/${tok}`, seg.slice(2).join("/"))) return;
      return notFound(res, user);
    }
    if (seg[0] === "sites" && seg.length >= 2) {
      const slug = seg[1].replace(/[^a-z0-9-]/g, "");
      const dir = path.join(DB.PUBLISHED_DIR, slug);
      if (serveFileFrom(dir, seg.slice(2).join("/") || "index.html", res)) return;
      if (await serveBlobFallback(res, `published/${slug}`, seg.slice(2).join("/"))) return;
      return notFound(res, user);
    }
    if (seg[0] === "asset-file" && seg.length === 3 && req.method === "GET") {
      const u = requireUser(req, res); if (!u) return;
      const proj = ownProject(u, seg[1]); if (!proj) return notFound(res, u);
      const { localAssetPath } = await import("./lib/media-engine.mjs");
      const fp = localAssetPath(seg[1], seg[2]);
      if (!fp) return notFound(res, u);
      res.writeHead(200, { "Content-Type": MIME[path.extname(fp).toLowerCase()] || "application/octet-stream", "Cache-Control": "no-store" });
      createReadStream(fp).pipe(res);
      return;
    }
    if (seg[0] === "demo" && seg.length >= 2) {
      const dir = path.join(APP_ROOT, "data", "demo-sites", seg[1].replace(/[^a-z0-9-]/g, ""));
      if (serveFileFrom(dir, seg.slice(2).join("/") || "index.html", res, { "X-Robots-Tag": "noindex" })) return;
      return notFound(res, user);
    }

    // ----- public pages -----
    if (req.method === "GET") {
      if (p === "/") return send(res, 200, Pub.landing({ user, demos: demos() }));
      if (p === "/templates") return send(res, 200, Pub.templatesPage({ user, demos: demos() }));
      if (seg[0] === "templates" && seg[1] && Engine.HERO_FAMILIES.some((f) => f.key === seg[1])) return send(res, 200, Pub.templateTryPage({ user, family: seg[1] }));
      if (p === "/pricing") return send(res, 200, Pub.pricingPage({ user }));
      if (p === "/support") return send(res, 200, Pub.supportPage({ user }));
      if (seg[0] === "legal" && ["privacy", "terms", "accessibility"].includes(seg[1])) return send(res, 200, Pub.legalPage({ user, kind: seg[1] }));
      if (p === "/login") {
        if (user) return redirect(res, "/dashboard");
        let csrf = Auth.csrfOf(req);
        if (!csrf) { csrf = U.token(16); res.setHeader("Set-Cookie", U.cookie("sf_csrf", csrf, { httpOnly: false })); }
        return send(res, 200, Pub.loginPage({ sent: url.searchParams.has("sent"), error: url.searchParams.get("error"), googleEnabled: Auth.GOOGLE_ENABLED, csrf }));
      }
      if (p === "/dev/inbox" && DEV) return send(res, 200, Pub.devInboxPage({ user, messages: DB.all("dev_inbox").reverse().slice(0, 50) }));
    }

    // ----- auth -----
    if (p === "/auth/magic-link" && req.method === "POST") {
      const body = await U.readForm(req);
      const betaCode = process.env.SITEFORGE_BETA_CODE;
      if (betaCode && !Auth.EMAIL_LIVE) {
        if (!U.timingSafeEq(U.clampStr(body.beta_code, 40), betaCode)) return redirect(res, "/login?error=" + encodeURIComponent("Invalid beta code. Email hello@woodwardsoftware.com for access."));
        if (!U.isEmail(body.email)) return redirect(res, "/login?error=" + encodeURIComponent("Enter a valid email."));
        const u = Auth.findOrCreateUser(body.email, { provider: "beta" });
        Auth.createSession(u, res);
        return redirect(res, "/dashboard");
      }
      await Auth.sendMagicLink(body.email, baseUrl, req);
      return redirect(res, "/login?sent=1");
    }
    if (p === "/auth/verify" && req.method === "GET") {
      const u = Auth.verifyMagicToken(url.searchParams.get("token") || "");
      if (!u) return redirect(res, "/login?error=" + encodeURIComponent("That link is expired or already used — request a fresh one."));
      Auth.createSession(u, res);
      return redirect(res, "/dashboard");
    }
    if (p === "/auth/google" && req.method === "GET") {
      if (!Auth.GOOGLE_ENABLED) return redirect(res, "/login?error=" + encodeURIComponent("Google sign-in isn't configured yet."));
      return redirect(res, Auth.googleAuthUrl(baseUrl, U.token(12)));
    }
    if (p === "/auth/google/callback" && req.method === "GET") {
      const u = await Auth.googleCallback(url.searchParams.get("code"), baseUrl);
      Auth.createSession(u, res);
      return redirect(res, "/dashboard");
    }
    if (p === "/auth/logout" && req.method === "POST") { Auth.logout(req, res); return redirect(res, "/"); }

    // ----- app pages -----
    if (req.method === "GET" && ["/dashboard", "/new", "/account"].includes(p)) {
      const u = requireUser(req, res); if (!u) return;
      if (p === "/dashboard") return send(res, 200, App.dashboard({ user: u, projects: DB.projectsOf(u.id), ent: Billing.entitlementFor(u), gens: Billing.generationGate(u) }));
      if (p === "/new") return send(res, 200, App.wizardPage({ user: u, csrf: Auth.csrfOf(req) }));
      if (p === "/account") return send(res, 200, App.accountPage({ user: u, ent: Billing.entitlementFor(u), sub: DB.subscriptionOf(u.id), csrf: Auth.csrfOf(req) }));
    }
    if (req.method === "GET" && seg[0] === "p" && seg[1]) {
      const u = requireUser(req, res); if (!u) return;
      const proj = ownProject(u, seg[1]); if (!proj) return notFound(res, u);
      const profile = DB.profileOf(proj.id);
      const tab = seg[2] || "";
      if (tab === "") return send(res, 200, App.projectOverview({ user: u, project: proj, profile, gens: DB.generationsOf(proj.id), edits: DB.editRequestsOf(proj.id), csrf: Auth.csrfOf(req) }));
      if (tab === "discovery") return send(res, 200, App.projectDiscovery({ user: u, project: proj, profile, assets: DB.assetsOf(proj.id).filter((a) => !a.stale), csrf: Auth.csrfOf(req) }));
      if (tab === "build") return send(res, 200, App.projectBuild({ user: u, project: proj, gens: DB.generationsOf(proj.id), csrf: Auth.csrfOf(req), jobId: url.searchParams.get("job"), gate: Billing.generationGate(u) }));
      if (tab === "preview") {
        const gens = DB.generationsOf(proj.id).filter((g) => g.status === "done");
        const v = url.searchParams.get("v");
        const gen = v ? gens.find((g) => g.version === Number(v)) : gens[0];
        const scorecard = gen?.site_dir ? U.readJsonFile(path.join(gen.site_dir, "scorecard.json"), null) : null;
        const seo = U.readJsonFile(path.join(DB.SITES_DIR, proj.id, "discovery", "seo.json"), null);
        return send(res, 200, App.projectPreview({ user: u, project: proj, gen, qc: gen ? DB.qcOf(gen.id) : null, csrf: Auth.csrfOf(req), version: gen?.version, scorecard, seo }));
      }
      if (tab === "publish") {
        const gen = DB.generationsOf(proj.id).find((g) => g.status === "done");
        return send(res, 200, App.projectPublish({ user: u, project: proj, gen, ent: Billing.entitlementFor(u), deployments: DB.deploymentsOf(proj.id), csrf: Auth.csrfOf(req), baseUrl }));
      }
      return notFound(res, u);
    }

    // ----- API: projects -----
    if (p === "/api/projects" && req.method === "POST") {
      const u = requireUser(req, res); if (!u) return;
      const body = await formGuard(req, res, u); if (!body) return;
      const gate = Billing.projectGate(u);
      if (!gate.ok) return send(res, 402, errorPage(402, `Your ${gate.ent.plan_name} plan includes ${gate.max} project${gate.max > 1 ? "s" : ""}. Upgrade to add more.`, u));
      U.need(body, ["business_name", "city", "state", "industry"]);
      const name = U.clampStr(body.business_name, 80);
      const proj = DB.insert("site_projects", {
        id: U.id("proj"), user_id: u.id, name, slug: `${U.kebab(body.industry)}-${U.kebab(name)}-${U.token(3).toLowerCase()}`.replace(/[^a-z0-9-]/g, ""),
        status: "draft", goal: U.clampStr(body.goal, 20) || "calls",
        city: U.clampStr(body.city, 60), state: U.clampStr(body.state, 2), industry: U.clampStr(body.industry, 40), next_version: 1,
      });
      const profile = DB.insert("business_profiles", {
        project_id: proj.id, business_name: name, industry: proj.industry, city: proj.city, state: proj.state,
        phone: U.clampStr(body.phone, 20) || null, website: body.website && U.isUrl(body.website) ? body.website : null,
        gbp_url: body.gbp_url && U.isUrl(body.gbp_url) ? body.gbp_url : null,
        services: U.clampStr(body.services, 400).split(",").map((s) => s.trim()).filter(Boolean),
      });
      DB.audit(u.id, "project.create", proj.id, { name });
      if (body.hero_family) DB.update("site_projects", proj.id, { hero_family: U.clampStr(body.hero_family, 40) });
      await Discovery.runDiscovery({ user: u, project: proj, profile }).catch((e) => DB.update("site_projects", proj.id, { discovery_error: e.message }));
      return redirect(res, `/p/${proj.id}/discovery`);
    }
    if (seg[0] === "api" && seg[1] === "projects" && seg[2] && req.method === "POST") {
      const u = requireUser(req, res); if (!u) return;
      const proj = ownProject(u, seg[2]); if (!proj) return notFound(res, u);
      const action = seg[3];

      // V7 media engine: multipart upload (logo + photos) — parsed before formGuard
      if (action === "assets" && seg[4] === "upload") {
        const Media = await import("./lib/media-engine.mjs");
        const parts = await Media.readMultipart(req);
        if (!Auth.csrfOk(req, parts.fields) && !req.headers["x-csrf-token"]) return send(res, 403, errorPage(403, "Session token mismatch — reload the page and try again.", u));
        const stored = [];
        for (const f of parts.files.slice(0, 12)) {
          const kind = f.field === "logo" ? "logo" : "photo";
          stored.push(await Media.storeUpload(proj, f, kind));
        }
        if (!stored.length) return send(res, 400, errorPage(400, "No files arrived — pick a logo or photos first.", u));
        DB.audit(u.id, "asset.upload", proj.id, { count: stored.length });
        if ((req.headers.accept || "").includes("application/json")) return json(res, 200, { ok: true, count: stored.length });
        return redirect(res, `/p/${proj.id}/discovery`);
      }

      const body = await formGuard(req, res, u); if (!body) return;
      const profile = DB.profileOf(proj.id);

      if (action === "logo-candidates") {
        const Media = await import("./lib/media-engine.mjs");
        await Media.makeLogoCandidates(proj, profile);
        DB.audit(u.id, "asset.logo_candidates", proj.id, {});
        return redirect(res, `/p/${proj.id}/discovery`);
      }
      if (action === "gbp-import") {
        if (body.gbp_url && U.isUrl(body.gbp_url)) { DB.update("business_profiles", profile.id, { gbp_url: body.gbp_url }); profile.gbp_url = body.gbp_url; }
        const Media = await import("./lib/media-engine.mjs");
        const deep = await Media.gbpDeepImport(proj, profile);
        DB.audit(u.id, "discovery.gbp_deep", proj.id, { reviews: deep.reviews.length, photos: deep.photos.length, latlng: Boolean(deep.latlng) });
        return redirect(res, `/p/${proj.id}/discovery`);
      }

      if (action === "discover") {
        await Discovery.runDiscovery({ user: u, project: proj, profile });
        return redirect(res, `/p/${proj.id}/discovery`);
      }
      if (action === "assets") {
        Discovery.addManualAsset(proj, { kind: U.clampStr(body.kind, 20), url: body.url, label: body.label });
        return redirect(res, `/p/${proj.id}/discovery`);
      }
      if (action === "generate" || action === "regenerate") {
        const gate = Billing.generationGate(u);
        if (!gate.ok) return send(res, 402, errorPage(402, `You've used ${gate.used}/${gate.max} forge runs this month. Upgrade for more.`, u));
        const last = DB.generationsOf(proj.id)[0];
        let options;
        if (action === "generate") {
          options = {
            prompt: U.clampStr(body.prompt, 4000), build_type: body.build_type === "premier_multi_page" ? "premier_multi_page" : "single_page_cinematic",
            hero_family: body.hero_family || null,
            sections_disabled: [].concat(body.sections_off || []).filter(Boolean),
            video_prompt: Boolean(body.video_prompt), rediscover: false,
          };
        } else {
          const target = U.clampStr(body.target, 20);
          const fams = Engine.HERO_FAMILIES.map((f) => f.key);
          const nextFam = fams[(fams.indexOf(last?.hero_family) + 1 + fams.length) % fams.length];
          options = {
            prompt: last?.prompt || "", build_type: last?.build_type || "single_page_cinematic",
            hero_family: target === "hero" ? nextFam : last?.hero_family || null,
            sections_disabled: target === "gallery" ? [...(last?.sections_disabled || []), "atlas-grid"] : target === "map" ? (last?.sections_disabled || []).filter((s) => s !== "service-map") : last?.sections_disabled || [],
            regen_target: target, video_prompt: false, rediscover: false,
          };
        }
        const { job, done } = Engine.startGeneration({ user: u, project: proj, profile, assets: DB.assetsOf(proj.id).filter((a) => !a.stale), options });
        if (Engine.SERVERLESS) { await done; return redirect(res, `/p/${proj.id}/preview`); }
        return redirect(res, `/p/${proj.id}/build?job=${job.id}`);
      }
      if (action === "publish") {
        const ent = Billing.entitlementFor(u);
        if (!ent.can_publish) return send(res, 402, errorPage(402, "Publishing needs a paid plan — your forged site stays saved.", u));
        const gen = DB.generationsOf(proj.id).find((g) => g.status === "done");
        if (!gen) return send(res, 400, errorPage(400, "Nothing forged yet.", u));
        const qc = DB.qcOf(gen.id);
        if (gen.qc_grade !== "A" && !(gen.qc_grade === "B" && qc?.degraded)) return send(res, 400, errorPage(400, `v${gen.version} graded ${gen.qc_grade}. The gate requires A (or B with deferred browser checks). Reforge or fix the flagged items.`, u));
        const local = await Engine.publishLocally(proj, gen);
        let liveUrl = `${baseUrl}${local.url}`;
        const vercel = await Engine.publishToVercel(proj, gen);
        if (!vercel.skipped) liveUrl = vercel.url;
        DB.insert("deployments", { project_id: proj.id, generation_id: gen.id, target: vercel.skipped ? "siteforge-local" : "vercel", url: liveUrl, status: "live" });
        DB.update("site_projects", proj.id, { status: "published", deploy_url: liveUrl });
        DB.insert("dev_inbox", { to: u.email, subject: `${proj.name} is live`, body: `Published v${gen.version} → ${liveUrl}${vercel.skipped ? ` (local mode: ${vercel.reason})` : ""}` });
        DB.audit(u.id, "project.publish", proj.id, { url: liveUrl, target: vercel.skipped ? "local" : "vercel" });
        return redirect(res, `/p/${proj.id}/publish`);
      }
      if (action === "domain") {
        const ent = Billing.entitlementFor(u);
        if (!ent.can_custom_domain) return send(res, 402, errorPage(402, "Custom domains come with paid plans.", u));
        const domain = U.clampStr(body.domain, 120).toLowerCase();
        if (!/^[a-z0-9][a-z0-9.-]+\.[a-z]{2,}$/.test(domain)) return send(res, 400, errorPage(400, "That doesn't look like a domain.", u));
        DB.insert("deployments", { project_id: proj.id, target: "custom-domain", url: `https://${domain}`, status: "dns_pending" });
        DB.update("site_projects", proj.id, { custom_domain: domain });
        DB.audit(u.id, "project.domain", proj.id, { domain });
        return redirect(res, `/p/${proj.id}/publish`);
      }
      if (action === "edit-requests") {
        U.need(body, ["message"]);
        DB.insert("edit_requests", { project_id: proj.id, user_id: u.id, message: U.clampStr(body.message, 2000), status: "open" });
        DB.insert("dev_inbox", { to: "ops@woodwardsoftware.com", subject: `Edit request — ${proj.name}`, body: body.message });
        DB.audit(u.id, "edit_request.create", proj.id, {});
        return redirect(res, `/p/${proj.id}`);
      }
      return notFound(res, u);
    }

    // ----- API: assets, jobs, templates, checkout -----
    if (seg[0] === "api" && seg[1] === "assets" && seg[2] && req.method === "PATCH") {
      const u = requireUser(req, res); if (!u) return;
      const body = await U.readJson(req);
      if (!Auth.csrfOk(req, body) && !req.headers["x-csrf-token"]) return json(res, 403, { error: "csrf" });
      const asset = DB.get("business_assets", seg[2]);
      const proj = asset && ownProject(u, asset.project_id);
      if (!proj) return json(res, 404, { error: "not found" });
      Discovery.setAssetApproval(asset.id, Boolean(body.approved));
      if (body.label) Discovery.editAssetLabel(asset.id, body.label);
      if (body.exclusive === "logo-candidate" && body.approved) {
        for (const sib of DB.where("business_assets", (x) => x.project_id === proj.id && x.kind === "logo" && x.origin === "ai-candidate" && x.id !== asset.id)) {
          DB.update("business_assets", sib.id, { approved: false });
        }
      }
      return json(res, 200, { ok: true });
    }
    if (seg[0] === "api" && seg[1] === "jobs" && seg[2]) {
      const job = DB.get("jobs", seg[2]);
      if (!job) return json(res, 404, { error: "job not found" });
      if (job.user_id) { const u = Auth.currentUser(req); if (!u || u.id !== job.user_id) return json(res, 403, { error: "forbidden" }); }
      if (seg[3] === "stream") {
        res.writeHead(200, { "Content-Type": "text/event-stream", "Cache-Control": "no-store", Connection: "keep-alive" });
        const write = (e) => res.write(`data: ${JSON.stringify(e)}\n\n`);
        const off = Engine.subscribe(job.id, write);
        const current = DB.get("jobs", seg[2]);
        if (["done", "failed"].includes(current.status) && !Engine.jobEvents(job.id)) write({ stage: "job", phase: current.status === "done" ? "done" : "failed", payload: current.result || { message: current.error }, ts: Date.now() });
        const hb = setInterval(() => res.write(": hb\n\n"), 15000);
        req.on("close", () => { clearInterval(hb); off(); });
        return;
      }
      return json(res, 200, { id: job.id, status: job.status, result: job.result ?? null, error: job.error ?? null });
    }
    if (p === "/api/templates/try" && req.method === "POST") {
      const rl = U.rateLimit(`try:${U.ipOf(req)}`, { max: 6, windowMs: 3600_000 });
      if (!rl.ok) return json(res, 429, { error: "That's plenty of free previews for one hour — sign up to keep forging." });
      const body = await U.readJson(req);
      U.need(body, ["family", "name", "city", "state", "category"]);
      if (!Engine.HERO_FAMILIES.some((f) => f.key === body.family)) return json(res, 400, { error: "unknown family" });
      const { job, done } = Engine.startTryOn({ family: body.family, name: U.clampStr(body.name, 60), city: U.clampStr(body.city, 40), state: U.clampStr(body.state, 2).toUpperCase(), category: U.clampStr(body.category, 30) });
      if (Engine.SERVERLESS) await done;
      return json(res, 202, { job_id: job.id });
    }
    if (p === "/api/checkout" && req.method === "POST") {
      const u = Auth.currentUser(req);
      const body = await U.readForm(req);
      if (!u) return redirect(res, "/login");
      if (body.kind === "plan" && body.key === "free") return redirect(res, "/dashboard");
      const { url: checkoutUrl } = await Billing.createCheckout({ user: u, kind: U.clampStr(body.kind, 12), key: U.clampStr(body.key, 40), baseUrl });
      return redirect(res, checkoutUrl);
    }

    // ----- billing pages + webhook -----
    if (p === "/billing/mock-checkout" && req.method === "GET") {
      const u = requireUser(req, res); if (!u) return;
      const intent = Billing.mockCheckoutIntent(url.searchParams.get("ref"), url.searchParams.get("t"));
      if (!intent) return notFound(res, u);
      return send(res, 200, App.mockCheckoutPage({ item: intent.item, refId: intent.co.id, t: url.searchParams.get("t"), csrf: Auth.csrfOf(req) }));
    }
    if (p === "/billing/mock-confirm" && req.method === "POST") {
      const u = requireUser(req, res); if (!u) return;
      const body = await formGuard(req, res, u); if (!body) return;
      const intent = Billing.mockCheckoutIntent(body.ref, body.t);
      if (!intent || intent.co.user_id !== u.id) return notFound(res, u);
      const granted = Billing.grantPurchase(body.ref, { mode: "mock" });
      return send(res, 200, App.billingSuccessPage({ user: u, granted }));
    }
    if (p === "/billing/success" && req.method === "GET") {
      const u = requireUser(req, res); if (!u) return;
      const co = DB.get("webhook_events", url.searchParams.get("ref"));
      return send(res, 200, App.billingSuccessPage({ user: u, granted: co?.status === "granted" ? co : null }));
    }
    if (p === "/api/webhooks/stripe" && req.method === "POST") {
      const raw = (await U.readBody(req)).toString("utf8");
      const check = Billing.verifyStripeSignature(raw, req.headers["stripe-signature"]);
      if (!check.ok) return json(res, 400, { error: `signature: ${check.reason}` });
      const event = JSON.parse(raw);
      const dup = DB.find("webhook_events", (w) => w.stripe_event_id === event.id);
      if (!dup) { DB.insert("webhook_events", { kind: "stripe_event", stripe_event_id: event.id, type: event.type }); Billing.handleStripeEvent(event); }
      return json(res, 200, { received: true });
    }

    return notFound(res, user);
  } catch (err) {
    const status = err.status || 500;
    if (status >= 500) console.error(`[siteforge] ${req.method} ${p} \u2192`, err);
    if ((req.headers.accept || "").includes("application/json") || p.startsWith("/api/")) return json(res, status, { error: err.message });
    return send(res, status, errorPage(status, err.message, user));
  }
};
const server = http.createServer(handle);

if (process.env.SITEFORGE_NO_LISTEN !== "1") {
  server.listen(PORT, () => {
    console.log(`\n  \u2302 SiteForge running \u2192 http://localhost:${PORT}`);
  });
}
export { server };
