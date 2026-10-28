"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { IconDownload } from "./icons";

type Props = {
  nav: { id: string; label: string }[];
  langSwitch: { label: string; href: string; aria: string };
  cvLabel: string;
  cvHref: string;
  homeLabel: string;
};

export default function SiteHeader({ nav, langSwitch, cvLabel, cvHref, homeLabel }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => io.observe(s));
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [nav]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled
          ? "bg-white/85 shadow-[0_1px_0_rgba(28,42,46,0.08)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#top"
          aria-label={homeLabel}
          className="flex items-center gap-2.5 font-extrabold tracking-tight text-ink"
        >
          <span className="grid size-8 place-items-center rounded-full bg-green text-[0.7rem] font-bold tracking-wider text-white">
            LB
          </span>
          <span className="hidden text-[0.95rem] sm:inline">Lautaro Barrera</span>
        </a>

        <nav aria-label="Secciones" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className={cn(
                    "relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                    active === n.id ? "text-green" : "text-muted hover:text-ink",
                  )}
                >
                  {n.label}
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-px origin-left bg-green transition-transform duration-300",
                      active === n.id ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={langSwitch.href}
            aria-label={langSwitch.aria}
            hrefLang={langSwitch.label.toLowerCase()}
            className="rounded-full px-3 py-1.5 text-xs font-bold tracking-widest text-muted transition-colors hover:bg-stone hover:text-ink"
          >
            {langSwitch.label}
          </a>
          <a
            href={cvHref}
            download
            className="inline-flex items-center gap-1.5 rounded-full bg-green px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-green-deep"
          >
            <IconDownload width={14} height={14} />
            {cvLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
