import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distRoot = path.resolve(projectRoot, "dist");
const serverEntryUrl = pathToFileURL(path.resolve(distRoot, "server", "entry-server.js")).href;

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const replaceTag = (html, pattern, replacement) => {
  if (!pattern.test(html)) {
    throw new Error(`Expected tag not found for pattern: ${pattern}`);
  }

  return html.replace(pattern, replacement);
};

const writeRouteHtml = async (routePath, html) => {
  const filePath =
    routePath === "/"
      ? path.resolve(distRoot, "index.html")
      : path.resolve(distRoot, routePath.slice(1), "index.html");

  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, html, "utf8");
};

const { prerenderRoutes, render } = await import(serverEntryUrl);
const template = await readFile(path.resolve(distRoot, "index.html"), "utf8");

for (const routePath of prerenderRoutes) {
  const { appHtml, seo } = render(routePath);

  let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  html = replaceTag(html, /<title>.*?<\/title>/s, `<title>${escapeHtml(seo.title)}</title>`);
  html = replaceTag(
    html,
    /<meta name="description" content=".*?">/s,
    `<meta name="description" content="${escapeHtml(seo.description)}">`,
  );
  html = replaceTag(
    html,
    /<meta property="og:title" content=".*?">/s,
    `<meta property="og:title" content="${escapeHtml(seo.title)}">`,
  );
  html = replaceTag(
    html,
    /<meta property="og:description" content=".*?">/s,
    `<meta property="og:description" content="${escapeHtml(seo.description)}">`,
  );
  html = replaceTag(
    html,
    /<meta name="twitter:title" content=".*?">/s,
    `<meta name="twitter:title" content="${escapeHtml(seo.title)}">`,
  );
  html = replaceTag(
    html,
    /<meta name="twitter:description" content=".*?">/s,
    `<meta name="twitter:description" content="${escapeHtml(seo.description)}">`,
  );
  html = replaceTag(
    html,
    /<meta property="og:image" content=".*?">/s,
    `<meta property="og:image" content="${escapeHtml(seo.ogImage)}">`,
  );
  html = replaceTag(
    html,
    /<meta name="twitter:image" content=".*?">/s,
    `<meta name="twitter:image" content="${escapeHtml(seo.ogImage)}">`,
  );
  html = replaceTag(
    html,
    /<meta property="og:url" content=".*?">/s,
    `<meta property="og:url" content="${escapeHtml(seo.canonicalUrl)}">`,
  );
  html = replaceTag(
    html,
    /<link rel="canonical" href=".*?">/s,
    `<link rel="canonical" href="${escapeHtml(seo.canonicalUrl)}">`,
  );

  await writeRouteHtml(routePath, html);
}
