import type { CSSProperties } from "react";
import BackgroundPaths from "./background-paths";
import RevealObserver from "./reveal-observer";
import SiteHeader from "./site-header";
import { IconArrow, IconDownload, IconLinkedIn, IconMail, IconPin } from "./icons";
import { CV_PDF, CV_PDF_EN, EMAIL, LINKEDIN, SITE_URL, type Dict } from "@/content/site";

/** Convierte **texto** en un resaltado tipo rotulador. */
function rich(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") ? (
      <mark key={i} className="hl">
        {part.slice(2, -2)}
      </mark>
    ) : (
      part
    ),
  );
}

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;
const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function SitePage({ t }: { t: Dict }) {
  const cvHref = t.locale === "en" ? CV_PDF_EN : CV_PDF;
  const ids = Object.fromEntries(t.nav.map((n, i) => [i, n.id]));
  const [idProfile, idCases, idTech, idExperience, idSkills, idEducation, idContact] = [0, 1, 2, 3, 4, 5, 6].map(
    (i) => ids[i],
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: t.name,
    jobTitle: t.title,
    url: SITE_URL + (t.path === "/" ? "" : t.path),
    image: `${SITE_URL}/img/lautaro.jpg`,
    email: `mailto:${EMAIL}`,
    sameAs: [LINKEDIN],
    address: { "@type": "PostalAddress", addressLocality: "Málaga", addressCountry: "ES" },
    alumniOf: { "@type": "EducationalOrganization", name: "Centro Superior de Hostelería de Galicia" },
    knowsLanguage: ["es", "gl", "en", "fr"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader
        nav={t.nav}
        langSwitch={t.langSwitch}
        cvLabel="CV"
        cvHref={cvHref}
        homeLabel={t.name}
      />
      <RevealObserver />

      <main id="top">
        {/* ───────────── Hero ───────────── */}
        <BackgroundPaths
          className="bg-stone text-green/40 md:text-green/75"
          count={32}
          angle={-6}
          speed={0.55}
          spread={0.9}
        >
          <section className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pt-28 pb-16 sm:px-6 md:min-h-[88svh] md:grid-cols-[1.25fr_0.75fr] md:pt-28 md:pb-16">
            <div className="order-2 -mx-4 rounded-2xl bg-stone/75 px-4 py-5 backdrop-blur-[3px] md:order-1 md:mx-0 md:bg-transparent md:p-0 md:backdrop-blur-none">
              <p
                className="hero-in text-[0.7rem] font-bold tracking-[0.2em] text-green uppercase sm:text-xs"
                style={d(80)}
              >
                {t.title}
              </p>
              <h1
                className="hero-in mt-5 text-[2.75rem] leading-[0.98] font-extrabold tracking-[-0.035em] text-ink sm:text-6xl lg:text-7xl"
                style={d(160)}
              >
                Lautaro
                <br />
                Barrera Cisterna
              </h1>
              <p
                className="hero-in mt-6 max-w-xl text-lg leading-relaxed text-ink/75"
                style={d(260)}
              >
                {t.profile.paragraphs[0]}
              </p>
              <p
                className="hero-in mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink/80"
                style={d(320)}
              >
                <IconPin width={16} height={16} className="text-green" />
                {t.location}
              </p>

              <div className="hero-in mt-8 flex flex-wrap items-center gap-3" style={d(400)}>
                <a
                  href={cvHref}
                  download
                  className="group inline-flex items-center gap-2 rounded-full bg-green px-4 py-3 text-sm font-semibold text-white sm:px-5 shadow-[0_8px_24px_-10px_rgba(46,94,78,0.7)] transition-all hover:-translate-y-0.5 hover:bg-green-deep"
                >
                  <IconDownload className="transition-transform group-hover:translate-y-0.5" />
                  {t.hero.downloadCv}
                </a>
                <a
                  href={`#${idContact}`}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-4 py-3 text-sm sm:px-5 font-semibold text-ink backdrop-blur transition-all hover:-translate-y-0.5 hover:border-green hover:text-green"
                >
                  <IconMail />
                  {t.hero.contact}
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.hero.linkedin}
                  className="grid size-11 place-items-center rounded-full border border-ink/15 bg-white/70 text-ink backdrop-blur transition-all hover:-translate-y-0.5 hover:border-green hover:text-green"
                >
                  <IconLinkedIn />
                </a>
              </div>
            </div>

            <div className="order-1 flex justify-center md:order-2 md:justify-end">
              <div className="hero-in relative size-52 sm:size-64 lg:size-80" style={d(0)}>
                {/* anillo discontinuo que gira despacio */}
                <svg
                  className="ring-spin absolute -inset-4 size-[calc(100%+2rem)] text-green/45"
                  viewBox="0 0 100 100"
                  aria-hidden
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="49"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.35"
                    strokeDasharray="1.2 2.2"
                  />
                </svg>
                <div className="absolute inset-0 rounded-full bg-white p-[5px] shadow-[0_30px_60px_-30px_rgba(28,42,46,0.45)] ring-2 ring-green">
                  <picture>
                    <source srcSet="/img/lautaro-400.webp 400w, /img/lautaro.webp 800w" type="image/webp" />
                    <img
                      src="/img/lautaro.jpg"
                      alt={t.name}
                      width={800}
                      height={800}
                      fetchPriority="high"
                      sizes="(min-width: 1024px) 320px, 256px"
                      className="size-full rounded-full object-cover"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </section>

          {/* Trayectoria: empresas, en texto */}
          <div className="relative border-t border-stone-line/80 bg-white/55 backdrop-blur-sm">
            <div className="hero-in mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 sm:px-6 md:flex-row md:items-center md:gap-8" style={d(560)}>
              <p className="shrink-0 text-[0.7rem] font-bold tracking-[0.2em] text-green uppercase">
                {t.hero.trajectory}
              </p>
              <ul className="flex flex-wrap gap-2">
                {t.trajectory.map((name) => (
                  <li
                    key={name}
                    className="rounded-full border border-ink/10 bg-white/80 px-3 py-1 text-[0.85rem] font-semibold text-ink/75"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </BackgroundPaths>

        {/* ───────────── Perfil ───────────── */}
        <section id={idProfile} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <h2 className="section-label reveal">{t.profile.heading}</h2>
          <p className="reveal mt-10 max-w-4xl text-2xl leading-snug font-semibold tracking-[-0.02em] text-ink sm:text-[2rem]">
            {t.profile.paragraphs[1]}
          </p>
          <dl className="reveal mt-12 grid gap-px overflow-hidden rounded-2xl border border-stone-line bg-stone-line sm:grid-cols-3" style={delay(120)}>
            {t.facts.map((f) => (
              <div key={f.label} className="flex items-baseline gap-3 bg-white px-5 py-5">
                <dt className="text-4xl font-extrabold tracking-tight text-accent">{f.value}</dt>
                <dd className="text-sm leading-snug text-muted">{f.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ───────────── Casos ───────────── */}
        <section id={idCases} className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 md:pb-28">
          <h2 className="section-label reveal">{t.cases.heading}</h2>
          <p className="reveal mt-6 max-w-2xl text-muted">{t.cases.intro}</p>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {t.cases.items.map((c, i) => (
              <article
                key={c.title}
                className="reveal flex flex-col rounded-2xl border border-stone-line bg-white p-6 transition-shadow duration-300 hover:shadow-[0_24px_48px_-28px_rgba(28,42,46,0.35)]"
                style={delay(i * 90)}
              >
                <p className="text-xs font-bold tracking-[0.14em] text-green uppercase">{c.company}</p>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-ink">{c.title}</h3>
                <dl className="mt-5 flex flex-1 flex-col gap-4 text-[0.95rem] leading-relaxed">
                  <div>
                    <dt className="text-xs font-bold tracking-wide text-muted uppercase">{t.cases.labels.problem}</dt>
                    <dd className="mt-1 text-ink/90">{c.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold tracking-wide text-muted uppercase">{t.cases.labels.action}</dt>
                    <dd className="mt-1 text-ink/90">{c.action}</dd>
                  </div>
                  <div className="mt-auto rounded-xl bg-accent-soft/45 p-4">
                    <dt className="text-xs font-bold tracking-wide text-[#7d5219] uppercase">{t.cases.labels.result}</dt>
                    <dd className="mt-1 font-semibold text-ink">{c.result}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        {/* ───────────── Tecnología ───────────── */}
        <section id={idTech} className="bg-green-deep text-white">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
            <h2 className="section-label reveal !text-white/80">{t.tech.heading}</h2>
            <p className="reveal mt-6 max-w-3xl text-2xl leading-snug font-semibold tracking-[-0.02em] sm:text-3xl">
              {t.tech.intro}
            </p>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {t.tech.items.map((it, i) => (
                <div
                  key={it.title}
                  className="reveal rounded-2xl border border-white/12 bg-white/[0.06] p-7 transition-colors duration-300 hover:bg-white/[0.1]"
                  style={delay(i * 90)}
                >
                  <div className="flex flex-col-reverse items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                    <h3 className="text-xl font-bold tracking-tight">{it.title}</h3>
                    <span className="shrink-0 rounded-full bg-accent-soft px-2.5 py-1 text-[0.68rem] font-bold tracking-wide text-green-deep uppercase">
                      {it.context}
                    </span>
                  </div>
                  <p className="mt-3 leading-relaxed text-white/80">{it.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── Experiencia ───────────── */}
        <section id={idExperience} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <h2 className="section-label reveal">{t.experience.heading}</h2>

          <ol className="relative mt-12 space-y-4">
            {/* raíl vertical */}
            <span
              aria-hidden
              className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-green via-green/30 to-transparent md:left-[211px]"
            />
            {t.experience.jobs.map((job, i) => (
              <li key={`${job.company}-${job.dates}`} className="reveal relative grid gap-3 pl-9 md:grid-cols-[180px_1fr] md:gap-14 md:pl-0" style={delay(Math.min(i, 3) * 60)}>
                <span
                  aria-hidden
                  className="absolute top-[0.55rem] left-0 size-[15px] rounded-full border-[3px] border-white bg-green ring-1 ring-green/40 md:left-[204px]"
                />
                <div className="md:pt-1 md:text-right">
                  <p className="text-sm font-bold text-green tabular-nums">{job.dates}</p>
                  <p className="mt-0.5 text-sm text-muted">{job.place}</p>
                </div>
                <article className="group rounded-2xl border border-transparent p-0 transition-all duration-300 md:-mt-4 md:p-6 md:hover:border-stone-line md:hover:bg-stone/60">
                  <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-ink">{job.role}</h3>
                      <p className="mt-0.5 font-semibold text-muted">{job.company}</p>
                    </div>
                    <ul className="flex flex-wrap gap-1.5 md:pt-1" aria-label="Etiquetas">
                      {job.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-green-soft px-2.5 py-1 text-[0.7rem] font-bold tracking-wide text-green-deep uppercase"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {job.note && (
                    <p className="mt-3 max-w-3xl text-[0.95rem] leading-relaxed text-muted">{job.note}</p>
                  )}
                  <ul className="mt-4 space-y-2">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex max-w-3xl gap-3 text-[0.95rem] leading-relaxed text-ink/90">
                        <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-green" />
                        <span>{rich(b)}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}

            {/* Etapa formativa */}
            <li className="reveal relative grid gap-3 pl-9 md:grid-cols-[180px_1fr] md:gap-14 md:pl-0">
              <span
                aria-hidden
                className="absolute top-[0.55rem] left-0 size-[15px] rounded-full border-[3px] border-white bg-stone-line ring-1 ring-green/30 md:left-[204px]"
              />
              <div className="md:pt-1 md:text-right">
                <p className="text-sm font-bold text-green tabular-nums">{t.experience.early.dates}</p>
              </div>
              <article className="rounded-2xl bg-stone p-6 md:-mt-4">
                <h3 className="text-xl font-bold tracking-tight text-ink">{t.experience.early.heading}</h3>
                <ul className="mt-4 divide-y divide-stone-line">
                  {t.experience.early.items.map((it) => {
                    const idx = it.indexOf(":");
                    const head = idx > -1 ? it.slice(0, idx) : it;
                    const raw = idx > -1 ? it.slice(idx + 1).trim() : "";
                    const rest = raw.charAt(0).toUpperCase() + raw.slice(1);
                    return (
                      <li key={it} className="grid gap-1 py-3 text-[0.92rem] leading-relaxed sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-6">
                        <span className="font-semibold text-ink">{head}</span>
                        <span className="text-muted">{rest}</span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            </li>
          </ol>
        </section>

        {/* ───────────── Competencias ───────────── */}
        <section id={idSkills} className="bg-stone">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
            <h2 className="section-label reveal">{t.skills.heading}</h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {t.skills.groups.map((g, i) => (
                <div
                  key={g.title}
                  className="reveal group relative overflow-hidden rounded-2xl border border-stone-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(28,42,46,0.35)]"
                  style={delay(i * 90)}
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-green transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <p className="text-xs font-bold tracking-[0.2em] text-green/70 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-xl font-bold tracking-tight text-ink">{g.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{g.text}</p>
                </div>
              ))}
            </div>
            <div className="reveal mt-10">
              <p className="text-sm font-semibold text-ink">{t.skills.systemsTitle}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {t.skills.systems.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-green/25 bg-white px-4 py-2 text-sm font-medium text-green"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ───────────── Formación + Idiomas ───────────── */}
        <section id={idEducation} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:gap-6">
            <div className="flex flex-col">
              <h2 className="section-label reveal">{t.education.heading}</h2>
              <div className="reveal mt-8 flex flex-1 flex-col rounded-2xl border border-stone-line p-7">
                <p className="text-sm font-bold text-green tabular-nums">{t.education.dates}</p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink">{t.education.degree}</h3>
                <p className="mt-2 font-semibold text-muted">{t.education.school}</p>
                <p className="mt-3 leading-relaxed text-ink/90">{t.education.detail}</p>
                <div className="mt-auto border-t border-stone-line pt-5">
                  <p className="text-xs font-bold tracking-[0.18em] text-green uppercase">{t.education.ongoingTitle}</p>
                  <ul className="mt-2 space-y-1">
                    {t.education.ongoing.map((o) => (
                      <li key={o} className="text-[0.95rem] text-ink/90">{o}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="section-label reveal">{t.languages.heading}</h2>
              <ul className="reveal mt-8 flex flex-1 flex-col justify-between gap-5 rounded-2xl border border-stone-line p-7">
                {t.languages.items.map((l) => (
                  <li key={l.name}>
                    <div className="flex items-baseline justify-between">
                      <span className="font-semibold text-ink">{l.name}</span>
                      <span className="text-sm font-medium text-muted">{l.level}</span>
                    </div>
                    {/* escala MCER de 6 niveles (A1–C2); nativo ocupa la escala completa */}
                    <div className="mt-2 grid grid-cols-6 gap-1" aria-hidden>
                      {Array.from({ length: 6 }).map((_, k) => (
                        <span
                          key={k}
                          className={k < l.cefr ? "h-1.5 rounded-full bg-green" : "h-1.5 rounded-full bg-stone-line"}
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ───────────── Portfolio (fase 2; oculto mientras esté vacío) ───────────── */}
        {t.portfolio.items.length > 0 && (
          <section id="portfolio" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 md:pb-28">
            <h2 className="section-label reveal">{t.portfolio.heading}</h2>
            <p className="reveal mt-6 text-muted">{t.portfolio.intro}</p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.portfolio.items.map((p) => (
                <li key={p.title} className="reveal overflow-hidden rounded-2xl border border-stone-line bg-white">
                  {p.image && <img src={p.image} alt={p.title} className="aspect-[4/3] w-full object-cover" loading="lazy" />}
                  <div className="p-5">
                    <p className="text-xs font-bold tracking-widest text-green uppercase">{p.category}</p>
                    <h3 className="mt-2 font-bold text-ink">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted">{p.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* ───────────── Contacto ───────────── */}
        <section id={idContact} className="relative overflow-hidden bg-green text-white">
          <BackgroundPaths className="absolute inset-0 text-white" count={24} angle={8} speed={0.35} interactive={false}>
            {null}
          </BackgroundPaths>
          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
            <h2 className="section-label reveal !text-white/80">{t.contact.heading}</h2>
            <div className="mt-10 grid gap-12 md:grid-cols-[1.3fr_0.7fr]">
              <div className="reveal">
                {t.contact.lead && <p className="text-sm font-semibold tracking-wide text-white/70">{t.contact.lead}</p>}
                <a
                  href={`mailto:${EMAIL}`}
                  className="group mt-4 inline-flex items-center gap-3 text-[1.6rem] font-extrabold tracking-[-0.02em] break-all sm:text-5xl"
                >
                  <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_2px] bg-bottom-left bg-no-repeat pb-1 transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">
                    {EMAIL}
                  </span>
                  <IconArrow className="size-6 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 sm:size-9" />
                </a>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href={cvHref}
                    download
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-green transition-all hover:-translate-y-0.5"
                  >
                    <IconDownload />
                    {t.contact.cv}
                  </a>
                  <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    <IconLinkedIn />
                    {t.contact.linkedin}
                  </a>
                </div>
              </div>
              <div className="reveal" style={delay(120)}>
                <p className="text-sm font-bold tracking-[0.18em] text-white/70 uppercase">{t.contact.moreHeading}</p>
                <ul className="mt-5 space-y-3">
                  {t.contact.more.map((m) => (
                    <li key={m} className="flex gap-3 leading-relaxed text-white/90">
                      <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-white/60" />
                      {m}
                    </li>
                  ))}
                  <li className="flex gap-3 leading-relaxed text-white/90">
                    <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-white/60" />
                    {t.location}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-deep text-white/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © 2026 {t.footer}
          </p>
          <p>lautarobc.com</p>
        </div>
      </footer>
    </>
  );
}
