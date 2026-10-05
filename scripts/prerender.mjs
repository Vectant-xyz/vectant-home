import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const templatePath = path.join(root, "dist/index.html");
const template = fs.readFileSync(templatePath, "utf8");
const serverEntry = pathToFileURL(path.join(root, "build/server/entry-server.js")).href;
const { render, routes, faq, posts } = await import(serverEntry);

const HOST = "https://www.vectant.xyz";
const LASTMOD = "2026-10-05";

function escapeText(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function escapeAttr(value) {
  return escapeText(value).replaceAll('"', "&quot;");
}

function stripLinks(value) {
  return value.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

function canonical(pathname) {
  return pathname === "/" ? `${HOST}/` : `${HOST}${pathname}`;
}

function pageSchema(route) {
  const url = canonical(route.path);
  const post = posts.find((item) => `/blog/${item.slug}` === route.path);
  let data;
  if (route.kind === "article" && post) {
    data = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: route.heading,
      description: route.description,
      datePublished: post.date,
      dateModified: post.date,
      mainEntityOfPage: url,
      author: { "@id": `${HOST}/#organization` },
      publisher: { "@id": `${HOST}/#organization` },
    };
  } else if (route.kind === "faq") {
    data = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      url,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: stripLinks(item.answer) },
      })),
    };
  } else {
    data = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      url,
      name: route.heading,
      description: route.description,
      isPartOf: { "@id": `${HOST}/#website` },
      about: { "@id": `${HOST}/#organization` },
    };
  }
  const json = JSON.stringify(data).replaceAll("<", "\\u003c");
  return `<script type="application/ld+json">${json}</script>`;
}

function applyMeta(html, route) {
  const url = canonical(route.path);
  const title = escapeText(route.title);
  const description = escapeAttr(route.description);
  const type = route.kind === "article" ? "article" : "website";
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${description}$2`)
    .replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta\s+property="og:type"\s+content=")[^"]*(")/, `$1${type}$2`)
    .replace(/(<meta\s+property="og:title"\s+content=")[^"]*(")/, `$1${escapeAttr(route.title)}$2`)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/, `$1${description}$2`)
    .replace(/(<meta\s+property="og:url"\s+content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta\s+name="twitter:title"\s+content=")[^"]*(")/, `$1${escapeAttr(route.title)}$2`)
    .replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, `$1${description}$2`);
}

const sitemap = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...routes.map(
    (route) => `  <url><loc>${canonical(route.path)}</loc><lastmod>${LASTMOD}</lastmod></url>`,
  ),
  `</urlset>`,
  ``,
].join("\n");

fs.writeFileSync(path.join(root, "dist/sitemap.xml"), sitemap);
fs.writeFileSync(path.join(root, "public/sitemap.xml"), sitemap);

for (const route of routes) {
  const appHtml = render(route.path);
  if (!appHtml.includes("<h1")) {
    throw new Error(`Prerender produced no heading for ${route.path}`);
  }
  if (route.path === "/" && !appHtml.includes("https://www.helvex.cc/")) {
    throw new Error("Homepage is missing the Helvex link");
  }
  if (route.path === "/" && !appHtml.includes("https://meridiant.xyz/")) {
    throw new Error("Homepage is missing the Meridiant link");
  }

  let html = template.replace("<!--app-html-->", appHtml);
  if (html.includes("<!--app-html-->")) {
    throw new Error(`Placeholder left in ${route.path}`);
  }
  html = applyMeta(html, route);
  html = html.replace("</head>", `    ${pageSchema(route)}\n  </head>`);

  const url = canonical(route.path);
  if (!html.includes(`rel="canonical" href="${url}"`)) {
    throw new Error(`Canonical was not set for ${route.path}`);
  }

  const outPath =
    route.path === "/" ? templatePath : path.join(root, "dist", route.path.slice(1), "index.html");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
}

console.log(`Prerendered ${routes.length} pages`);
