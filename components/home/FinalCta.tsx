import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

export function FinalCta() {
  return (
    <section className="bg-beige py-section-sm text-center md:py-section">
      <Reveal className="habitat-container">
        <h2 className="mx-auto max-w-2xl text-4xl font-light leading-tight md:text-5xl">
          Tu próximo lugar puede empezar acá.
        </h2>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            className="arrow-link focus-ring inline-flex items-center justify-center gap-2 bg-ink px-8 py-4 text-xs font-medium uppercase tracking-label text-ivory transition-colors duration-300 hover:bg-ivory hover:text-ink"
            href="#propiedades"
          >
            Explorar alquileres
            <ArrowRight aria-hidden="true" size={14} />
          </Link>
          <Link
            className="focus-ring border border-ink px-8 py-4 text-xs font-medium uppercase tracking-label text-ink transition-colors hover:bg-ivory"
            href="#visitas"
          >
            Coordinar visita
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
