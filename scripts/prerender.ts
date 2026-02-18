import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import type { HelmetServerState } from "react-helmet-async";

const routes = [
  "/",
  "/about",
  "/services",
  "/testimonials",
  "/faqs",
  "/blog",
  "/blog/search",
  "/blog/signs-of-a-cheating-spouse",
  "/blog/best-way-to-hire-a-private-investigator",
  "/blog/finding-a-private-investigator-infidelity",
  "/contact",
];

const distDir = join(import.meta.dirname, "..", "dist");
const rawTemplate = readFileSync(join(distDir, "index.html"), "utf-8");

// Strip static meta/link tags that helmet will replace per-page.
// Keep charset, viewport, preconnect, dns-prefetch, and analytics script.
const template = rawTemplate
  .replace(/<title>[^<]*<\/title>\n?/, "")
  .replace(/\s*<meta name="description"[^>]*\/?>[\n]?/g, "")
  .replace(/\s*<link rel="canonical"[^>]*\/?>[\n]?/g, "")
  .replace(/\s*<!-- Open Graph -->[\s\S]*?<!-- Twitter Card -->\n/g, "")
  .replace(/\s*<meta name="twitter:card"[^>]*\/?>[\n]?/g, "")
  .replace(/\s*<meta name="twitter:title"[^>]*\/?>[\n]?/g, "")
  .replace(/\s*<meta name="twitter:description"[^>]*\/?>[\n]?/g, "")
  .replace(/\s*<meta name="twitter:image"[^>]*\/?>[\n]?/g, "");

const { render } = await import(join(distDir, "server", "entry-server.js"));

function injectHelmet(html: string, helmet: HelmetServerState): string {
  // Inject title, meta, link, and script tags right before </head>
  const headTags = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ]
    .filter(Boolean)
    .join("\n    ");

  if (headTags) {
    html = html.replace("</head>", `    ${headTags}\n  </head>`);
  }

  return html;
}

for (const route of routes) {
  const { html: appHtml, helmet } = render(route);

  let page = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  page = injectHelmet(page, helmet);

  if (route === "/") {
    writeFileSync(join(distDir, "index.html"), page);
  } else {
    const outDir = join(distDir, route.slice(1));
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, "index.html"), page);
  }

  console.log(`Pre-rendered: ${route}`);
}

console.log(`\nDone! Pre-rendered ${routes.length} routes.`);
