// Genera las imágenes para compartir (1200x630) y el apple-touch-icon.  node cv-source/build-og.mjs
import { chromium } from "playwright";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";
const here = dirname(fileURLToPath(import.meta.url));
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
for (const [q, out] of [["", "og-es.png"], ["?en", "og-en.png"]]) {
  await p.goto(pathToFileURL(resolve(here, "og.html")).href + q, { waitUntil: "networkidle" });
  await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: resolve(here, "../public/og", out) });
}
const i = await b.newPage({ viewport: { width: 180, height: 180 } });
await i.setContent(`<body style="margin:0;width:180px;height:180px;background:#2E5E4E;display:grid;place-items:center;font:700 64px Arial;color:#fff;letter-spacing:2px">LB</body>`);
await i.screenshot({ path: resolve(here, "../public/apple-touch-icon.png") });
await b.close();
console.log("ok");
