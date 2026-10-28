# lautarobc.com

Web personal de Lautaro Barrera Cisterna. Next.js (App Router), Tailwind CSS 4, Manrope.

- `/` español, `/en` inglés. Contenido en `src/content/site.ts` (fuente única; francés previsto).
- Portfolio (fase 2): rellenar `portfolio.items` en `site.ts`; la sección aparece sola.
- Fondo animado: Background Paths de Kokonut UI (MIT, publicado en 21st.dev).

## Comandos
- `npm run dev` · `npm run build`
- CV en PDF: `node cv-source/build-cv.mjs` (genera la versión web sin teléfono en `public/cv/` y la completa en `cv-source/out/`, no versionada).
- Imágenes para compartir: `node cv-source/build-og.mjs`.
