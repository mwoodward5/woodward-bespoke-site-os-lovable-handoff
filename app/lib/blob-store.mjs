// Vercel Blob persistence for serverless deployments. Uses the raw Blob REST
// API (no SDK) with BLOB_READ_WRITE_TOKEN. All paths are prefixed "sf/".
const TOKEN = () => process.env.BLOB_READ_WRITE_TOKEN || "";
export const BLOB_ENABLED = () => Boolean(TOKEN());
const API = "https://blob.vercel-storage.com";

let baseUrl = null; // https://<store>.public.blob.vercel-storage.com

export async function blobPut(pathname, body, contentType = "application/octet-stream") {
  const r = await fetch(`${API}/sf/${pathname}`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${TOKEN()}`,
      "x-api-version": "7",
      "x-add-random-suffix": "0",
      "x-allow-overwrite": "1",
      "content-type": contentType,
    },
    body,
  });
  if (!r.ok) throw new Error(`blob put ${pathname}: ${r.status} ${(await r.text()).slice(0, 120)}`);
  const data = await r.json();
  if (!baseUrl) baseUrl = data.url.slice(0, data.url.indexOf("/sf/"));
  return data.url;
}

export async function blobGet(pathname) {
  if (!baseUrl) {
    // discover base url via list API once
    const r = await fetch(`${API}?prefix=sf/&limit=1`, { headers: { authorization: `Bearer ${TOKEN()}`, "x-api-version": "7" } });
    if (r.ok) { const d = await r.json(); if (d.blobs?.[0]?.url) baseUrl = d.blobs[0].url.slice(0, d.blobs[0].url.indexOf("/sf/")); }
    if (!baseUrl) return null;
  }
  const r = await fetch(`${baseUrl}/sf/${pathname}`, { cache: "no-store" });
  return r.ok ? r : null;
}

export async function blobDelete(pathname) {
  await fetch(`${API}/delete`, {
    method: "POST",
    headers: { authorization: `Bearer ${TOKEN()}`, "x-api-version": "7", "content-type": "application/json" },
    body: JSON.stringify({ urls: [`${baseUrl}/sf/${pathname}`] }),
  }).catch(() => {});
}

// List blobs under a prefix via the authorized API (fresh, not CDN-cached).
export async function blobList(prefix) {
  const r = await fetch(`${API}?prefix=sf/${encodeURIComponent(prefix)}&limit=1000`, { headers: { authorization: `Bearer ${TOKEN()}`, "x-api-version": "7" } });
  if (!r.ok) return [];
  const d = await r.json();
  if (d.blobs?.[0]?.url && !baseUrl) baseUrl = d.blobs[0].url.slice(0, d.blobs[0].url.indexOf("/sf/"));
  return d.blobs ?? [];
}
export async function blobDeleteUrls(urls) {
  if (!urls.length) return;
  await fetch(`${API}/delete`, {
    method: "POST",
    headers: { authorization: `Bearer ${TOKEN()}`, "x-api-version": "7", "content-type": "application/json" },
    body: JSON.stringify({ urls }),
  }).catch(() => {});
}

// Upload a whole directory (site bundle) under a prefix.
export async function blobUploadDir(dir, prefix) {
  const { readdirSync, statSync, readFileSync } = await import("node:fs");
  const path = await import("node:path");
  const MIME = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".mp4": "video/mp4", ".txt": "text/plain" };
  const walk = async (d, base = "") => {
    for (const name of readdirSync(d)) {
      const fp = path.join(d, name);
      const rel = base ? `${base}/${name}` : name;
      if (statSync(fp).isDirectory()) await walk(fp, rel);
      else await blobPut(`${prefix}/${rel}`, readFileSync(fp), MIME[path.extname(name).toLowerCase()] || "application/octet-stream");
    }
  };
  await walk(dir);
}
