"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  target?: "_blank";
  rel?: string;
};

const leftNav: NavItem[] = [
  { label: "PROPIEDADES", href: "#propiedades" },
  { label: "BARRIOS", href: "#barrios" },
  { label: "MAPA", href: "#mapa" }
];

const rightNav: NavItem[] = [
  { label: "NOSOTROS", href: "#nosotros" },
  {
    label: "PROPIETARIOS",
    href: "/propietarios",
    target: "_blank",
    rel: "noopener noreferrer"
  },
  { label: "CONTACTO", href: "#contacto" }
];

const headerLinkClass = (inverted: boolean) =>
  `focus-ring relative inline-flex py-2 text-xs font-bold uppercase tracking-[0.08em] transition-colors after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-5 after:-translate-x-1/2 after:scale-x-0 after:bg-taupe after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100 ${
    inverted ? "text-ivory/85 hover:text-ivory" : "text-ink/75 hover:text-ink"
  }`;

export function Header() {
  const pathname = usePathname();
  const canOverlayHero = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const inverted = canOverlayHero && !scrolled;

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 64);

    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        !canOverlayHero || scrolled
          ? "bg-ivory/95 backdrop-blur-[2px]"
          : "bg-transparent"
      }`}
    >
      <nav className="relative mx-auto grid h-[72px] w-full max-w-[1280px] grid-cols-[1fr_auto_1fr] items-center gap-x-6 px-6">
        <div className="hidden min-w-0 items-center justify-end gap-5 min-[1360px]:flex">
          {leftNav.map((item) => (
            <Link
              className={headerLinkClass(inverted)}
              href={item.href}
              key={item.label}
              target={item.target}
              rel={item.rel}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          className="focus-ring col-start-2 row-start-1 flex h-14 w-[180px] shrink-0 items-center justify-center overflow-visible md:h-16 md:w-[220px] min-[1360px]:w-[360px]"
          href="/"
          aria-label="Ir al inicio de HÁBITAT"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/brand/habitat-logo.png"
            alt="HÁBITAT"
            width={640}
            height={640}
            priority
            sizes="(min-width: 1280px) 220px, (min-width: 768px) 220px, 180px"
            className={`h-14 w-[180px] scale-[1.45] object-contain transition-[filter,opacity] duration-300 md:h-16 md:w-[220px] md:scale-[1.8] ${
              inverted
                ? "brightness-0 invert opacity-95"
                : "opacity-100"
            }`}
          />
        </Link>
        <div className="hidden min-w-0 items-center justify-start gap-5 min-[1360px]:flex">
          {rightNav.map((item) => (
            <Link
              className={headerLinkClass(inverted)}
              href={item.href}
              key={item.label}
              target={item.target}
              rel={item.rel}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className={`focus-ring inline-flex h-[38px] items-center justify-center whitespace-nowrap rounded-full px-5 text-[0.64rem] font-bold uppercase tracking-[0.08em] leading-none transition-all duration-300 hover:-translate-y-px ${
              inverted
                ? "border border-ivory/70 bg-ivory/[0.88] text-ink shadow-[0_7px_18px_rgba(41,38,35,0.08)] hover:bg-ivory"
                : "border border-ink/75 bg-ink text-ivory shadow-[0_7px_18px_rgba(41,38,35,0.09)] hover:bg-taupe hover:text-ink"
            }`}
            href="#propiedades"
          >
            ENCONTRÁ TU LUGAR →
          </Link>
        </div>
        <button
          className={`focus-ring col-start-3 row-start-1 ml-auto inline-flex h-10 w-10 items-center justify-center border transition-colors min-[1360px]:hidden ${
            inverted
              ? "border-ivory/60 text-ivory"
              : "border-taupe/60 text-ink"
          }`}
          aria-label={menuOpen ? "Cerrar navegación" : "Abrir navegación"}
          aria-expanded={menuOpen}
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? (
            <X aria-hidden="true" size={18} />
          ) : (
            <Menu aria-hidden="true" size={18} />
          )}
        </button>
        <div
          className={`absolute left-5 right-5 top-full mt-2 grid gap-1 rounded-[14px] border border-taupe/45 bg-ivory/95 p-3 text-ink shadow-[0_14px_36px_rgba(45,38,32,0.10)] backdrop-blur-[2px] transition-all duration-300 min-[1360px]:hidden ${
            menuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
          aria-hidden={!menuOpen}
        >
          {[...leftNav, ...rightNav].map((item) => (
            <Link
              className="focus-ring relative rounded-[10px] px-3 py-3 text-xs font-semibold uppercase tracking-label text-ink transition-colors after:absolute after:bottom-2 after:left-3 after:h-px after:w-6 after:scale-x-0 after:bg-taupe after:transition-transform after:duration-300 hover:bg-sand/45 hover:after:scale-x-100"
              href={item.href}
              key={item.label}
              onClick={() => setMenuOpen(false)}
              target={item.target}
              rel={item.rel}
              tabIndex={menuOpen ? undefined : -1}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="focus-ring mt-2 inline-flex h-[38px] items-center justify-center rounded-full bg-ink px-5 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-ivory transition-colors hover:bg-taupe hover:text-ink"
            href="#propiedades"
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? undefined : -1}
          >
            ENCONTRÁ TU LUGAR →
          </Link>
        </div>
      </nav>
      <span
        className={`absolute bottom-0 left-1/2 h-px w-[calc(100%-48px)] max-w-[1280px] -translate-x-1/2 transition-colors duration-500 ${
          inverted ? "bg-ivory/[0.24]" : "bg-ink/[0.12]"
        }`}
        aria-hidden="true"
      />
    </header>
  );
}
