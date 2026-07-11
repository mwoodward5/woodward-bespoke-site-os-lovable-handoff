// SiteForge SaaS — shared page shell. Server-rendered, semantic, fast.
import { esc } from "../lib/util.mjs";

export const LOGO_SVG = `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect x="1" y="1" width="24" height="24" rx="6" fill="#191611"/>
  <path d="M6 17.5 L13 6.5 L20 17.5" stroke="#C2571B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M9.5 17.5 L13 12 L16.5 17.5" stroke="#FAF6EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="13" cy="20" r="1.4" fill="#C2571B"/>
</svg>`;

export const MOTIF_SVG = `<svg class="hero-motif" viewBox="0 0 1200 640" preserveAspectRatio="xMaxYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <g fill="none" stroke="#DDD3BE" stroke-width="1.1">
    ${Array.from({ length: 11 }, (_, i) => {
      const o = i * 34;
      return `<path d="M ${640 + o} -20 C ${760 + o} 120, ${700 + o} 260, ${840 + o} 380 S ${900 + o} 600, ${1080 + o} 680" opacity="${(0.9 - i * 0.07).toFixed(2)}"/>`;
    }).join("")}
  </g>
  <g fill="#C2571B" opacity=".55">
    <circle cx="905" cy="196" r="3.2"/><circle cx="1012" cy="358" r="2.5"/><circle cx="836" cy="472" r="2.8"/>
  </g>
</svg>`;

const NAV_PUBLIC = [
  ["/templates", "Templates"],
  ["/#how", "How it works"],
  ["/pricing", "Pricing"],
  ["/#faq", "FAQ"],
];
const NAV_APP = [
  ["/dashboard", "Dashboard"],
  ["/new", "New site"],
  ["/templates", "Templates"],
  ["/account", "Account"],
];

export function page({ title, desc, path = "/", user = null, body, head = "", noindex = false }) {
  const nav = (user ? NAV_APP : NAV_PUBLIC)
    .map(([href, label]) => `<a href="${href}" ${path === href ? 'class="active"' : ""}>${label}</a>`).join("");
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} — SiteForge by Woodward Software Labs</title>
<meta name="description" content="${esc(desc)}">
${noindex ? '<meta name="robots" content="noindex, nofollow">' : ""}
<meta property="og:title" content="${esc(title)} — SiteForge">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:type" content="website">
<meta property="og:image" content="/og.png">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="manifest" href="/manifest.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400..700&family=Archivo:wght@400;600;700&family=Fragment+Mono&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/theme.css">
${head}
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
<nav class="nav" aria-label="Primary">
  <div class="wrap nav-inner">
    <a class="brand" href="${user ? "/dashboard" : "/"}">${LOGO_SVG} SiteForge</a>
    <div class="nav-links">
      ${nav}
      ${user
        ? `<span class="chip" title="${esc(user.email)}">${esc(user.name || user.email)}</span>
           <form method="post" action="/auth/logout" style="display:inline"><button class="btn ghost sm" type="submit">Sign out</button></form>`
        : `<a href="/login">Sign in</a><a class="btn ember sm" href="/new">Forge your site</a>`}
    </div>
  </div>
</nav>
<main id="main">
${body}
</main>
<footer class="footer">
  <div class="wrap">
    <div class="footer-grid">
      <div>
        <a class="brand" href="/">${LOGO_SVG} SiteForge</a>
        <p style="margin-top:.8rem;font-size:.9rem">Type your business. We find your real content, forge a one-of-one premium site, grade it before you see it, and put it live.</p>
        <p class="muted" style="font-size:.82rem">A Woodward Software Labs product.</p>
      </div>
      <div><h4>Product</h4><ul>
        <li><a href="/templates">Template collections</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/#how">How it works</a></li>
        <li><a href="/new">Start a build</a></li>
      </ul></div>
      <div><h4>Company</h4><ul>
        <li><a href="/support">Support</a></li>
        <li><a href="mailto:hello@woodwardsoftware.com">hello@woodwardsoftware.com</a></li>
      </ul></div>
      <div><h4>Legal</h4><ul>
        <li><a href="/legal/privacy">Privacy</a></li>
        <li><a href="/legal/terms">Terms</a></li>
        <li><a href="/legal/accessibility">Accessibility</a></li>
      </ul></div>
    </div>
    <div class="legal">
      <span>© ${new Date().getFullYear()} Woodward Software Labs. All rights reserved.</span>
      <span>Every build is QC-graded before it ships. No fabricated reviews, ever.</span>
    </div>
  </div>
</footer>
<div id="consent" class="consent" hidden>
  <p>SiteForge uses only essential cookies to keep you signed in. No ad trackers.</p>
  <button id="consent-ok" class="btn sm ember" type="button">Okay</button>
</div>
<script src="/app.js" defer></script>
</body>
</html>`;
}

export function errorPage(status, message, user = null) {
  return page({
    title: `${status}`, desc: "Something went sideways.", user, noindex: true,
    body: `<section class="section"><div class="wrap" style="text-align:center;max-width:640px">
      <p class="eyebrow" style="justify-content:center">Error ${status}</p>
      <h1 style="font-size:clamp(2.2rem,6vw,3.6rem)">${status === 404 ? "This page isn't on the map." : "The forge hit a snag."}</h1>
      <p style="margin:0 auto 1.6rem">${esc(message)}</p>
      <div class="btn-row" style="justify-content:center"><a class="btn" href="/">Back to safety</a><a class="btn ghost" href="/support">Get help</a></div>
    </div></section>`,
  });
}
