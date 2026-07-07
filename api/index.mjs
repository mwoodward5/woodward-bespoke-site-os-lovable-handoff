// Vercel serverless entry for the full SiteForge app.
// One function wraps the whole router; state lives in Vercel Blob.
process.env.SITEFORGE_SERVERLESS = "1";
process.env.SITEFORGE_NO_LISTEN = "1";
process.env.SITEFORGE_DATA_DIR ||= "/tmp/sf-data";

const store = await import("../app/lib/store.mjs");
const { handle } = await import("../app/server.mjs");

export default async function handler(req, res) {
  await store.hydrate().catch(() => {});
  const origEnd = res.end.bind(res);
  let ended = false;
  res.end = (...args) => {
    if (ended) return res; ended = true;
    store.flushRemote().catch(() => {}).finally(() => origEnd(...args));
    return res;
  };
  await handle(req, res);
}
