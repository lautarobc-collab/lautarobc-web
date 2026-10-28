// Genera los PDF del CV a partir de cv.html.
//   node cv-source/build-cv.mjs
// Salidas:
//   public/cv/CV-Lautaro-Barrera-Cisterna.pdf   → versión web (sin teléfono), la que se descarga en lautarobc.com
//   cv-source/out/CV-Lautaro-Barrera-Cisterna-completo.pdf → con teléfono, para candidaturas
import { chromium } from "playwright";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";
import { mkdirSync } from "node:fs";

const here = dirname(fileURLToPath(import.meta.url));
const src = pathToFileURL(resolve(here, "cv.html")).href;
mkdirSync(resolve(here, "out"), { recursive: true });

const jobs = [
  { query: "?web=1", out: resolve(here, "../public/cv/CV-Lautaro-Barrera-Cisterna.pdf") },
  { query: "", out: resolve(here, "out/CV-Lautaro-Barrera-Cisterna-completo.pdf") },
];

const browser = await chromium.launch();
const page = await browser.newPage();
for (const job of jobs) {
  await page.goto(src + job.query, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: job.out, format: "A4", printBackground: true, preferCSSPageSize: true });
  console.log("OK", job.out);
}
await browser.close();
