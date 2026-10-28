// Genera todos los CV en PDF a partir de src/content/site.ts (misma fuente que la web).
//   npx tsx cv-source/build-cv.mts
//
// Salidas
//   public/cv/CV-Lautaro-Barrera-Cisterna.pdf         diseño ES, sin teléfono (descarga de la web)
//   public/cv/CV-Lautaro-Barrera-Cisterna-EN.pdf      diseño EN, sin teléfono (descarga de la web)
//   cv-source/out/CV-Lautaro-Barrera-Cisterna-completo.pdf   diseño ES, con teléfono (candidaturas por email)
//   cv-source/out/CV-Lautaro-Barrera-Cisterna-EN-full.pdf    diseño EN, con teléfono
//   cv-source/out/CV-Lautaro-Barrera-Cisterna-ATS.pdf        una columna ES, con teléfono (portales de empleo)
//   cv-source/out/CV-Lautaro-Barrera-Cisterna-EN-ATS.pdf     una columna EN, con teléfono
import { chromium } from "playwright";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { EMAIL, LINKEDIN_SHORT, PHONE, es, en, type Dict, type Job } from "../src/content/site";

const here = dirname(fileURLToPath(import.meta.url));
const css = readFileSync(resolve(here, "cv.css"), "utf8");
mkdirSync(resolve(here, "out"), { recursive: true });

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const icon = {
  phone: `<svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`,
  pin: `<svg viewBox="0 0 24 24"><path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>`,
  li: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/></svg>`,
  web: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>`,
};

function jobHtml(j: Job) {
  return `<div class="job">
    <div class="job-head"><h4>${esc(j.role)}</h4><span class="dates">${esc(j.dates)}</span></div>
    <p class="company">${esc(j.company)} · ${esc(j.place)}</p>
    ${j.note ? `<p class="note">${esc(j.note)}</p>` : ""}
    <ul>${j.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
  </div>`;
}

/** CV de diseño a dos columnas, 2 páginas A4. */
function designHtml(t: Dict, withPhone: boolean) {
  const jobs = t.experience.jobs;
  const p1 = jobs.slice(0, 3);
  const p2 = jobs.slice(3);
  return `<!doctype html><html lang="${t.htmlLang}"><head><meta charset="utf-8"><title>CV ${esc(t.name)}</title><style>${css}</style></head><body>
<div class="page">
  <aside class="side">
    <div class="photo"><img src="../public/img/lautaro.jpg" alt=""></div>
    <section><h3>${esc(t.cv.contact)}</h3><ul class="contact">
      ${withPhone ? `<li>${icon.phone}<span>${PHONE}</span></li>` : ""}
      <li>${icon.mail}<span>${EMAIL}</span></li>
      <li>${icon.pin}<span>${esc(t.cv.location)}</span></li>
      <li>${icon.li}<span>${LINKEDIN_SHORT}</span></li>
      <li>${icon.web}<span>lautarobc.com</span></li>
    </ul></section>
    <section><h3>${esc(t.cv.languages)}</h3><ul class="langs">
      ${t.languages.items.map((l) => `<li><span>${esc(l.name)}</span><span>${esc(l.level)}</span></li>`).join("")}
    </ul></section>
    <section class="skills"><h3>${esc(t.cv.skills)}</h3>
      ${t.skills.groups.map((g) => `<div><b>${esc(g.title)}</b><p>${esc(g.text)}</p></div>`).join("")}
      <div><b>${esc(t.skills.systemsTitle)}</b><p>${esc(t.cv.skillsSystems)}</p></div>
    </section>
  </aside>
  <main class="main">
    <h1>Lautaro<br>Barrera Cisterna</h1>
    <p class="subtitle">${esc(t.title.toUpperCase())}</p>
    <h2>${esc(t.cv.profile)}</h2>
    <div class="profile">${t.profile.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
    <h2>${esc(t.cv.experience)}</h2>
    ${p1.map(jobHtml).join("")}
    <span class="pnum">1 / 2</span>
  </main>
</div>
<div class="page">
  <aside class="side">
    <p class="side-name">Lautaro<br>Barrera Cisterna</p>
    <p class="side-role">${esc(t.cv.sideRole)}</p>
    <section><h3>${esc(t.cv.more)}</h3><ul class="more">
      ${t.cv.moreItems.map((m) => `<li>${esc(m)}</li>`).join("")}
    </ul></section>
  </aside>
  <main class="main">
    <h2 class="ruled">${esc(t.cv.experienceCont)}</h2>
    ${p2.map(jobHtml).join("")}
    <div class="job">
      <div class="job-head"><h4>${esc(t.experience.early.heading)}</h4><span class="dates">${esc(t.experience.early.dates)}</span></div>
      <p class="early">${t.experience.early.items.map(esc).join(" · ")}</p>
    </div>
    <h2 class="ruled" style="margin-top:6mm">${esc(t.cv.education)}</h2>
    <div class="job">
      <div class="job-head"><h4>${esc(t.education.degree)}</h4><span class="dates">${esc(t.education.dates)}</span></div>
      <p class="company">${esc(t.education.school)}</p>
      <p class="edu-detail">${esc(t.education.detail)}</p>
      <p class="ongoing"><b>${esc(t.education.ongoingTitle)}</b>${t.education.ongoing.map(esc).join(" · ")}</p>
    </div>
    <span class="pnum">2 / 2</span>
  </main>
</div>
</body></html>`;
}

/** CV a una columna, sin iconos ni foto, pensado para portales y programas de selección. */
function atsHtml(t: Dict) {
  const h = (s: string) => `<h2>${esc(s)}</h2>`;
  return `<!doctype html><html lang="${t.htmlLang}"><head><meta charset="utf-8"><title>CV ${esc(t.name)}</title><style>
  @font-face{font-family:Manrope;src:url("../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2") format("woff2");font-weight:200 800}
  @page{size:A4;margin:11mm 14mm}
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:Manrope,Arial,sans-serif;color:#1c2a2e;font-size:8.9pt;line-height:1.34}
  h1{font-size:20pt;font-weight:800;letter-spacing:-.01em}
  .title{font-size:10.5pt;font-weight:700;color:#2E5E4E;margin-top:1mm}
  .contact{margin-top:2mm;font-size:9.5pt}
  h2{font-size:10.5pt;font-weight:800;text-transform:uppercase;letter-spacing:.06em;color:#2E5E4E;border-bottom:.3mm solid #2E5E4E;padding-bottom:1mm;margin:3.4mm 0 1.6mm}
  .job{margin-bottom:2.6mm;break-inside:avoid}
  .job h3{font-size:10pt;font-weight:700}
  .meta{font-size:9pt;color:#4f5b5a}
  ul{padding-left:4.5mm;margin-top:1mm}
  li{margin-bottom:.6mm}
  p+p{margin-top:1.5mm}
</style></head><body>
<h1>${esc(t.name)}</h1>
<p class="title">${esc(t.title)}</p>
<p class="contact">${esc(t.cv.location)} | ${PHONE} | ${EMAIL} | ${LINKEDIN_SHORT} | lautarobc.com</p>
${h(t.cv.profile)}
${t.profile.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")}
${h(t.cv.experience)}
${t.experience.jobs
  .map(
    (j) => `<div class="job"><h3>${esc(j.role)} | ${esc(j.company)}</h3>
<p class="meta">${esc(j.place)} | ${esc(j.dates)}</p>
${j.note ? `<p class="meta">${esc(j.note)}</p>` : ""}
<ul>${j.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul></div>`,
  )
  .join("")}
<div class="job"><h3>${esc(t.experience.early.heading)}</h3><p class="meta">${esc(t.experience.early.dates)}</p>
<ul>${t.experience.early.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul></div>
${h(t.cv.education)}
<div class="job"><h3>${esc(t.education.degree)}</h3><p class="meta">${esc(t.education.school)} | ${esc(t.education.dates)}</p>
<p>${esc(t.education.detail)}</p><p>${esc(t.education.ongoingTitle)}: ${t.education.ongoing.map(esc).join(", ")}</p></div>
${h(t.cv.skills)}
<ul>${t.skills.groups.map((g) => `<li><b>${esc(g.title)}:</b> ${esc(g.text)}</li>`).join("")}
<li><b>${esc(t.skills.systemsTitle)}:</b> ${esc(t.cv.skillsSystems)}</li></ul>
${h(t.cv.languages)}
<p>${t.languages.items.map((l) => `${esc(l.name)}: ${esc(l.level)}`).join(" | ")}</p>
${h(t.cv.more)}
<p>${t.cv.moreItems.map(esc).join(" ")}</p>
</body></html>`;
}

const jobs: { file: string; html: string; out: string; design: boolean }[] = [
  { file: "_cv-es-web.html", html: designHtml(es, false), out: "../public/cv/CV-Lautaro-Barrera-Cisterna.pdf", design: true },
  { file: "_cv-en-web.html", html: designHtml(en, false), out: "../public/cv/CV-Lautaro-Barrera-Cisterna-EN.pdf", design: true },
  { file: "_cv-es-full.html", html: designHtml(es, true), out: "out/CV-Lautaro-Barrera-Cisterna-completo.pdf", design: true },
  { file: "_cv-en-full.html", html: designHtml(en, true), out: "out/CV-Lautaro-Barrera-Cisterna-EN-full.pdf", design: true },
  { file: "_cv-es-ats.html", html: atsHtml(es), out: "out/CV-Lautaro-Barrera-Cisterna-ATS.pdf", design: false },
  { file: "_cv-en-ats.html", html: atsHtml(en), out: "out/CV-Lautaro-Barrera-Cisterna-EN-ATS.pdf", design: false },
];

const browser = await chromium.launch();
const page = await browser.newPage();
for (const j of jobs) {
  const path = resolve(here, j.file);
  writeFileSync(path, j.html);
  await page.goto(pathToFileURL(path).href, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  if (j.design) {
    // Aviso si el contenido no cabe en alguna página del diseño
    const overflow = await page.evaluate(() =>
      Array.from(document.querySelectorAll(".page")).some((pg) =>
        Array.from(pg.querySelectorAll(".main > *, .side > *")).some(
          (el) => (el as HTMLElement).getBoundingClientRect().bottom > pg.getBoundingClientRect().bottom - 8,
        ),
      ),
    );
    if (overflow) console.warn("⚠ Contenido desbordado en", j.file);
  }
  await page.pdf({
    path: resolve(here, j.out),
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
  });
  console.log("OK", j.out);
}
await browser.close();
