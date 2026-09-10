import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";

const aboutImages = {
  main: {
    src: "/neighborhoods/recoleta.jpg",
    alt: "Arquitectura clásica y balcones sobre una calle luminosa de Buenos Aires."
  },
  interior: {
    src: "/properties/colegiales.jpg",
    alt: "Interior cálido de departamento con luz natural y mobiliario contemporáneo."
  },
  detail: {
    src: "/neighborhoods/palermo.jpg",
    alt: "Calle arbolada y fachada residencial con carácter barrial en Buenos Aires."
  }
};

export function AboutSection() {
  return (
    <section
      className="habitat-container grid gap-12 py-section-sm md:py-section lg:grid-cols-12 lg:items-center lg:gap-10"
      id="nosotros"
    >
      <Reveal className="lg:col-span-5">
        <span className="eyebrow-dot mb-4">Sobre HÁBITAT</span>
        <h2 className="max-w-2xl text-[clamp(42px,3.4vw,62px)] font-light leading-[0.98] text-ink">
          Una inmobiliaria pensada desde otro lugar.
        </h2>
        <p className="mt-7 max-w-xl text-[15px] leading-7 text-muted md:text-[17px] md:leading-8">
          Creemos que buscar un hogar debe ser una experiencia transparente y
          simple. Nos enfocamos en propiedades seleccionadas con criterio,
          espacios que inspiran y un servicio personalizado que acompaña cada paso.
        </p>
      </Reveal>
      <div className="group relative lg:col-span-7 lg:col-start-6 lg:min-h-[720px]">
        <Reveal
          image
          delay={120}
          className="relative z-10 ml-auto h-[480px] w-[82%] overflow-hidden rounded-[14px] bg-sand shadow-[0_18px_46px_rgba(45,38,32,0.09)] transition-transform duration-700 ease-out group-hover:scale-[1.015] md:h-[560px] lg:absolute lg:right-0 lg:top-0 lg:h-[660px]"
        >
          <Image
            src={aboutImages.main.src}
            alt={aboutImages.main.alt}
            fill
            sizes="(min-width: 1024px) 42vw, 82vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal
          image
          delay={260}
          className="relative z-20 -mt-24 h-[220px] w-[54%] -rotate-1 overflow-hidden rounded-[12px] bg-ivory shadow-[0_16px_38px_rgba(45,38,32,0.10)] transition-transform duration-700 ease-out group-hover:-translate-y-1 md:h-[270px] lg:absolute lg:bottom-20 lg:left-0 lg:mt-0"
        >
          <Image
            src={aboutImages.interior.src}
            alt={aboutImages.interior.alt}
            fill
            sizes="(min-width: 1024px) 28vw, 54vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal
          image
          delay={380}
          className="relative z-30 -mt-20 ml-auto mr-5 h-[250px] w-[50%] rotate-[1.2deg] overflow-hidden rounded-[12px] bg-dusty shadow-[0_16px_38px_rgba(45,38,32,0.085)] transition-transform duration-700 ease-out group-hover:translate-y-1 md:h-[300px] lg:absolute lg:bottom-0 lg:right-8 lg:mt-0"
        >
          <Image
            src={aboutImages.detail.src}
            alt={aboutImages.detail.alt}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover"
          />
        </Reveal>
        <span className="label-caps absolute bottom-44 left-[54%] z-40 hidden rounded-full bg-ivory/80 px-3 py-2 text-ink/70 shadow-[0_8px_20px_rgba(45,38,32,0.055)] backdrop-blur-[1px] lg:inline-flex">
          ESPACIOS QUE SE SIENTEN PROPIOS
        </span>
      </div>
    </section>
  );
}
