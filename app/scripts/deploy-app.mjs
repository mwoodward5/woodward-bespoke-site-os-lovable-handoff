#!/usr/bin/env node
// Deploy the FULL SiteForge app (serverless) to the Vercel project `siteforge-app`.
//   node app/scripts/deploy-app.mjs
// Reads VERCEL_TOKEN / VERCEL_TEAM_ID from .env.local. Sets project env vars
// (Firecrawl, session secret, publish token) idempotently, uploads the curated
// file set, creates a production deployment, and prints the live URL.
import "../lib/env.mjs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { createHash, randomBytes } from "node:crypto";

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const TOKEN = process.env.VERCEL_TOKEN;
const TEAM = process.env.VERCEL_TEAM_ID || "team_d1RUoZ8HnmCsYLmbqEtHdrb3";
const PROJECT = "siteforge-app";
if (!TOKEN) { console.error("✖ VERCEL_TOKEN missing in .env.local"); process.exit(2); }

const api = (p, opts = {}) => fetch(`https://api.vercel.com${p}${p.includes("?") ? "&" : "?"}teamId=${TEAM}`, { ...opts, headers: { Authorization: `Bearer ${TOKEN}`, ...(opts.headers || {}) } });

// ---------- env vars (upsert) ----------
const envs = [
  ["SITEFORGE_SERVERLESS", "1"],
  ["SITEFORGE_SESSION_SECRET", process.env.SITEFORGE_SESSION_SECRET || randomBytes(24).toString("base64url")],
  ...(process.env.FIRECRAWL_API_KEY ? [["FIRECRAWL_API_KEY", process.env.FIRECRAWL_API_KEY]] : []),
  ["SITEFORGE_VERCEL_TOKEN", TOKEN],
  ["SITEFORGE_VERCEL_TEAM_ID", TEAM],
  // Stripe (optional): passed through only when present in .env.local so go-live
  // is one command. Live charging still needs STRIPE_ALLOW_LIVE=1 AND an sk_live_ key.
  // Note: only sets keys not already present in Vercel (rotate via dashboard).
  ...(process.env.STRIPE_SECRET_KEY ? [["STRIPE_SECRET_KEY", process.env.STRIPE_SECRET_KEY]] : []),
  ...(process.env.STRIPE_ALLOW_LIVE ? [["STRIPE_ALLOW_LIVE", process.env.STRIPE_ALLOW_LIVE]] : []),
  ...(process.env.STRIPE_WEBHOOK_SECRET ? [["STRIPE_WEBHOOK_SECRET", process.env.STRIPE_WEBHOOK_SECRET]] : []),
];
const existing = await (await api(`/v9/projects/${PROJECT}/env`)).json();
const have = new Set((existing.envs || []).map((e) => e.key));
for (const [key, value] of envs) {
  if (have.has(key)) continue;
  const r = await api(`/v10/projects/${PROJECT}/env?upsert=true`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key, value, type: "encrypted", target: ["production", "preview"] }),
  });
  console.log(`env ${key}: ${r.ok ? "set" : `FAILED ${r.status}`}`);
}

// ---------- file set ----------
const INCLUDE_DIRS = ["api", "app", "factory/pipeline", "factory/lib", "factory/heroes", "asset-pipeline", "qc-audit", "copy-voice"];
const INCLUDE_FILES = ["scripts/forge.mjs", "generator-queue-v5.schema.json", "vercel.json"];
const EXCLUDE = /(^|\/)(data|test|node_modules|\.git)(\/|$)|\.env/;
const files = [];
function add(rel) {
  const fp = path.join(REPO, rel);
  if (!existsSync(fp)) return;
  const st = statSync(fp);
  if (st.isDirectory()) { for (const n of readdirSync(fp)) add(`${rel}/${n}`); return; }
  if (EXCLUDE.test(rel) || st.size > 4 * 1024 * 1024) return;
  files.push({ rel: rel.replace(/\\/g, "/"), buf: readFileSync(fp) });
}
INCLUDE_DIRS.forEach(add); INCLUDE_FILES.forEach(add);
files.push({ rel: "package.json", buf: Buffer.from(JSON.stringify({ name: "siteforge-app", private: true, type: "module", engines: { node: "22.x" }, dependencies: { jsdom: "^24.0.0", playwright: "^1.47.0" } }, null, 2)) });
console.log(`⚒ uploading ${files.length} files (${(files.reduce((n, f) => n + f.buf.length, 0) / 1048576).toFixed(1)} MB)…`);

// ---------- upload + deploy ----------
const manifest = [];
for (const f of files) {
  const sha = createHash("sha1").update(f.buf).digest("hex");
  const r = await api("/v2/files", { method: "POST", headers: { "x-vercel-digest": sha, "Content-Length": String(f.buf.length), "Content-Type": "application/octet-stream" }, body: f.buf });
  if (!r.ok && r.status !== 409) { console.error(`✖ ${f.rel}: ${r.status} ${(await r.text()).slice(0, 120)}`); process.exit(1); }
  manifest.push({ file: f.rel, sha, size: f.buf.length });
  process.stdout.write(".");
}
console.log("\n⚒ creating deployment…");
const dep = await api("/v13/deployments", {
  method: "POST", headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: PROJECT, files: manifest, target: "production", projectSettings: { framework: null } }),
});
const data = await dep.json();
if (!dep.ok) { console.error("✖", JSON.stringify(data.error || data).slice(0, 400)); process.exit(1); }
console.log(`✔ deployment created: https://${data.url} (id ${data.id})`);
console.log("  building — poll with: GET /v13/deployments/" + data.id);
