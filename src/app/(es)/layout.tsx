import "@fontsource-variable/manrope";
import "../globals.css";
import { es } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export { viewport } from "@/lib/metadata";
export const metadata = buildMetadata(es);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="antialiased">
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
