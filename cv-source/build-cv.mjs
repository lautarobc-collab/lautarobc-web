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
const es = pathToFileURL(resolve(here, "cv.html")).href;
const en = pathToFileURL(resolve(here, "cv-en.html")).href;
mkdirSync(resolve(here, "out"), { recursive: true });

const jobs = [
  { src: es, query: "?web=1", out: resolve(here, "../public/cv/CV-Lautaro-Barrera-Cisterna.pdf") },
  { src: es, query: "", out: resolve(here, "out/CV-Lautaro-Barrera-Cisterna-completo.pdf") },
  { src: en, query: "?web=1", out: resolve(here, "../public/cv/CV-Lautaro-Barrera-Cisterna-EN.pdf") },
  { src: en, query: "", out: resolve(here, "out/CV-Lautaro-Barrera-Cisterna-EN-full.pdf") },
];

const browser = await chromium.launch();
const page = await browser.newPage();
for (const job of jobs) {
  await page.goto(job.src + job.query, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: job.out, format: "A4", printBackground: true, preferCSSPageSize: true });
  console.log("OK", job.out);
}
await browser.close();
