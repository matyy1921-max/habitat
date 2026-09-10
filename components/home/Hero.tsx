import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SearchBar } from "@/components/home/SearchBar";
import { HeroMedia } from "@/components/home/HeroMedia";

export function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden pt-20 text-ivory md:min-h-screen">
      <HeroMedia />
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(41,38,35,0.38)_0%,rgba(41,38,35,0.08)_58%,transparent_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[46%] bg-[linear-gradient(0deg,rgba(41,38,35,0.28)_0%,rgba(41,38,35,0.08)_52%,transparent_100%)]" />
      <div className="habitat-container relative z-10 grid min-h-[680px] grid-rows-[1fr_auto] gap-8 pb-8 pt-16 md:min-h-[calc(100vh-5rem)] md:pb-12 md:pt-20 lg:grid-cols-12 lg:grid-rows-[1fr_auto]">
        <div className="hero-copy-enter w-full max-w-[calc(100vw-2.5rem)] self-center overflow-hidden rounded-[var(--radius-lg)] border border-[#F1E4D3]/70 bg-ivory/[0.88] p-7 text-ink shadow-[0_6px_22px_rgba(45,38,32,0.045)] backdrop-blur-[1.5px] md:p-9 lg:col-span-5 lg:col-start-8 lg:-mr-6 lg:mt-16 lg:max-w-none lg:p-10">
          <span className="hero-copy-enter label-caps mb-5 block text-muted">
            ALQUILERES · BUENOS AIRES
          </span>
          <h1
            className="hero-copy-enter max-w-[11ch] text-4xl font-light leading-[1.02] text-ink md:text-5xl lg:text-6xl"
            style={{ "--enter-delay": "100ms" } as CSSProperties}
          >
            Viví la ciudad
            <br />
            desde tu lugar.
          </h1>
          <p
            className="hero-copy-enter mt-6 max-w-[30ch] text-base leading-7 text-muted md:max-w-sm"
            style={{ "--enter-delay": "220ms" } as CSSProperties}
          >
            Propiedades seleccionadas para encontrar un espacio que acompañe tu
            forma de vivir.
          </p>
          <Link
            className="arrow-link hero-copy-enter focus-ring mt-8 inline-flex items-center gap-2 border-b border-taupe pb-2 text-[0.7rem] font-semibold uppercase tracking-label text-ink transition-colors duration-300 hover:text-muted"
            href="#propiedades"
            style={{ "--enter-delay": "320ms" } as CSSProperties}
          >
            Explorar alquileres
            <ArrowRight aria-hidden="true" size={15} />
          </Link>
        </div>
        <div
          className="hero-copy-enter self-end text-ink lg:col-span-6 lg:col-start-1 lg:row-start-2"
          style={{ "--enter-delay": "460ms" } as CSSProperties}
        >
          <SearchBar />
        </div>
        <span className="label-caps absolute bottom-5 right-5 hidden text-ivory/70 md:right-16 md:block">
          34°36&apos;S · 58°23&apos;W
        </span>
        <span className="label-caps hero-copy-enter absolute left-5 top-28 hidden text-ivory/75 md:left-16 lg:block">
          01 / INICIO
        </span>
      </div>
    </section>
  );
}
