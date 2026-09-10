import type { CSSProperties } from "react";
import {
  ArrowRight,
  BadgeDollarSign,
  Building2,
  KeyRound,
  MessageCircle
} from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";

const services = [
  {
    number: "01",
    title: "ALQUILERES",
    text: "Seleccionamos propiedades y acompañamos cada búsqueda para encontrar un espacio que realmente encaje con tu forma de vivir.",
    Icon: KeyRound
  },
  {
    number: "02",
    title: "GESTIÓN DE PROPIEDADES",
    text: "Acompañamos a propietarios en la publicación, selección de inquilinos y seguimiento de su propiedad.",
    Icon: Building2
  },
  {
    number: "03",
    title: "VALORACIONES",
    text: "Analizamos las características, ubicación y contexto de mercado de tu propiedad para ofrecerte una valoración clara y orientativa.",
    Icon: BadgeDollarSign
  }
];

const valuationBackgroundImage = "/properties/colegiales.jpg";

const valuationHref = `https://wa.me/${
  siteConfig.whatsapp.phone
}?text=${encodeURIComponent(siteConfig.whatsapp.messages.valuation)}`;

export function ServicesValuationSection() {
  return (
    <section className="bg-ivory py-section-sm md:py-section">
      <div className="habitat-container">
        <Reveal className="max-w-3xl">
          <span className="draft-line label-caps mb-4">
            MÁS QUE PROPIEDADES
          </span>
          <h2 className="text-4xl font-light leading-tight text-ink md:text-5xl lg:text-6xl">
            Acompañamos cada etapa.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">
            Desde encontrar un nuevo hogar hasta poner en valor una propiedad,
            trabajamos con un proceso cercano, claro y personalizado.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map(({ Icon, number, text, title }, index) => (
            <Reveal
              as="article"
              className="group border-t border-taupe/55 pt-6 transition-all duration-500 hover:-translate-y-1 hover:border-ink/55"
              delay={index * 130}
              key={number}
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="label-caps">{number}</span>
                <span className="service-icon flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] border border-taupe/55 text-ink transition-colors duration-500 group-hover:border-ink/60 group-hover:bg-sand/35">
                  <Icon aria-hidden="true" size={18} strokeWidth={1.5} />
                </span>
              </div>
              <h3 className="text-2xl font-light leading-tight text-ink">
                {title}
              </h3>
              <p className="mt-5 max-w-sm text-sm leading-6 text-muted">
                {text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal
          className="mt-20 overflow-hidden rounded-[12px] border border-taupe/55 shadow-[0_12px_36px_rgba(45,38,32,0.07)] md:mt-24"
          image
        >
          <div
            className="relative min-h-[540px] bg-cover bg-center md:min-h-[620px]"
            style={
              {
                backgroundImage: `linear-gradient(90deg, rgba(41,38,35,0.52), rgba(41,38,35,0.18) 58%, rgba(41,38,35,0.08)), url(${valuationBackgroundImage})`
              } as CSSProperties
            }
          >
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(41,38,35,0.22),transparent_48%)]" />
            <div className="relative z-10 flex min-h-[540px] items-end p-5 md:min-h-[620px] md:p-10 lg:p-14">
              <div className="max-w-xl rounded-[12px] border border-[#F1E4D3]/65 bg-ivory/[0.88] p-7 text-ink shadow-[0_8px_28px_rgba(45,38,32,0.06)] backdrop-blur-[1.5px] md:p-10">
                <h3 className="text-4xl font-light leading-tight md:text-5xl">
                  ¿Querés saber cuánto vale tu propiedad?
                </h3>
                <p className="mt-6 text-base leading-7 text-muted md:text-lg md:leading-8">
                  Contanos sobre tu propiedad y te ayudamos a entender su valor
                  actual de mercado, sin vueltas y con una mirada personalizada.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    className="arrow-link focus-ring inline-flex items-center justify-center gap-2 bg-ink px-5 py-4 text-xs font-medium uppercase tracking-label text-ivory transition-colors duration-300 hover:bg-taupe hover:text-ink"
                    href={valuationHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    SOLICITAR VALORACIÓN
                    <ArrowRight aria-hidden="true" size={16} />
                  </a>
                  <a
                    className="focus-ring inline-flex items-center justify-center gap-2 border border-ink/70 px-5 py-4 text-xs font-medium uppercase tracking-label text-ink transition-colors duration-300 hover:bg-sand/65"
                    href={valuationHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle aria-hidden="true" size={16} />
                    HABLAR POR WHATSAPP
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
