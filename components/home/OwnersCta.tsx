import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

export function OwnersCta() {
  return (
    <section className="bg-ivory py-section-sm md:py-section">
      <div className="habitat-container">
        <Reveal className="overflow-hidden rounded-[14px] bg-[#302C27] px-6 py-14 text-ivory shadow-[0_18px_44px_rgba(45,38,32,0.13)] md:px-12 md:py-16 lg:px-16 lg:py-18">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <span className="mb-4 inline-flex w-fit items-center rounded-full border border-taupe/35 bg-ivory/[0.07] px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-label text-taupe">
                PARA PROPIETARIOS
              </span>
              <h2 className="text-4xl font-light leading-tight text-ivory md:text-5xl">
                ¿Sos propietario?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-ivory/72 md:text-lg md:leading-8">
                Gestioná tu propiedad con nosotros de forma simple, clara y
                personalizada.
              </p>
            </div>
            <Link
              className="arrow-link focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ivory px-7 text-xs font-semibold uppercase tracking-label text-[#302C27] shadow-[0_8px_22px_rgba(12,10,8,0.13)] transition-all duration-300 hover:-translate-y-px hover:bg-sand"
              href="/propietarios"
              target="_blank"
              rel="noopener noreferrer"
            >
              IR A PROPIETARIOS
              <ArrowRight aria-hidden="true" size={14} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
