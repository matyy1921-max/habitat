import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bath, BedDouble, Ruler } from "lucide-react";
import type { Property } from "@/data/properties";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const currencyFormatter = new Intl.NumberFormat("es-AR");

const surfaces = [
  "bg-ivory/70",
  "bg-sand/35",
  "bg-[#F2EEE7]/80",
  "bg-dusty/45"
];

type FeaturedPropertiesProps = {
  properties: Property[];
};

function getEditorialProperties(properties: Property[]) {
  return properties.length >= 4
    ? properties.slice(0, 4).map((property) => ({
        property,
        placeholder: false
      }))
    : [
        ...properties.map((property) => ({
          property,
          placeholder: false
        })),
        // Agregar la cuarta propiedad real en data/properties.ts para reemplazar este duplicado visual.
        {
          property: properties[0],
          placeholder: true
        }
      ].slice(0, 4);
}

export function FeaturedProperties({ properties }: FeaturedPropertiesProps) {
  const editorialProperties = getEditorialProperties(properties);

  return (
    <section
      className="mx-auto w-full max-w-[1580px] px-5 py-section-sm md:px-10 md:py-section lg:px-12"
      id="propiedades"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Propiedades destacadas"
          title={
            <>
              Espacios para vivir <span className="text-[var(--accent)]">a tu manera.</span>
            </>
          }
          className="mb-14"
        />
      </Reveal>
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-10 xl:gap-12">
        {editorialProperties.map(({ property, placeholder }, index) => (
          <EditorialPropertyBlock
            property={property}
            reversed={index % 2 === 1}
            surface={surfaces[index % surfaces.length]}
            priority={index < 2}
            delay={index * 110}
            key={`${property.id}-${placeholder ? "placeholder" : index}`}
          />
        ))}
      </div>
      <Reveal className="mt-10 flex justify-center" delay={180}>
        <Link
          className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-taupe/45 bg-ivory/60 px-6 py-3 text-xs font-semibold uppercase tracking-label text-ink shadow-[0_8px_22px_rgba(45,38,32,0.045)] transition-all duration-300 hover:-translate-y-px hover:bg-sand/55"
          href="#mapa"
          aria-label="Ver todas las propiedades en el mapa"
        >
          VER TODAS LAS PROPIEDADES →
          <ArrowUpRight aria-hidden="true" size={14} />
        </Link>
      </Reveal>
    </section>
  );
}

type EditorialPropertyBlockProps = {
  property: Property;
  reversed: boolean;
  surface: string;
  priority: boolean;
  delay: number;
};

function EditorialPropertyBlock({
  property,
  reversed,
  surface,
  priority,
  delay
}: EditorialPropertyBlockProps) {
  return (
    <Reveal
      as="article"
      className="group h-full transition-transform duration-500 ease-out hover:-translate-y-1"
      delay={delay}
    >
      <Link
        className={`focus-ring grid h-full overflow-hidden rounded-[16px] ${surface} shadow-[0_12px_34px_rgba(45,38,32,0.05)] transition-all duration-500 hover:shadow-[0_18px_42px_rgba(45,38,32,0.075)] sm:grid-cols-2`}
        href={`/propiedades/${property.slug}`}
        target="_blank"
        rel="noreferrer"
        aria-label={`Abrir propiedad ${property.title} en una pestaña nueva`}
      >
        <div
          className={`relative min-h-[270px] overflow-hidden bg-sand sm:min-h-[340px] lg:min-h-[370px] xl:min-h-[390px] ${
            reversed ? "sm:order-2" : ""
          }`}
        >
          <Image
            src={property.image}
            alt={property.imageAlt}
            fill
            priority={priority}
            sizes="(min-width: 1440px) 390px, (min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/[0.04]" />
          <span className="absolute right-4 top-4 flex h-10 w-10 translate-y-1 items-center justify-center rounded-full bg-ivory/90 text-ink opacity-0 shadow-[0_6px_18px_rgba(41,38,35,0.10)] backdrop-blur-[1px] transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.6} />
          </span>
        </div>
        <div
          className={`flex min-h-[270px] flex-col justify-between p-6 sm:min-h-[340px] md:p-8 lg:min-h-[370px] lg:p-9 xl:min-h-[390px] xl:p-10 ${
            reversed ? "sm:order-1" : ""
          }`}
        >
          <div>
            <span className="eyebrow-dot mb-5">{property.modality}</span>
            <h3 className="text-3xl font-light leading-tight text-ink md:text-4xl">
              {property.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              {property.address}
            </p>
            <p className="mt-6 text-xl font-medium text-ink">
              {property.currency} {currencyFormatter.format(property.price)} / mes
            </p>
          </div>
          <div>
            <dl className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted">
              <div className="flex items-center gap-1.5">
                <Ruler aria-hidden="true" size={14} />
                <dt className="sr-only">Metros cuadrados</dt>
                <dd>{property.squareMeters}m²</dd>
              </div>
              <div className="flex items-center gap-1.5">
                <BedDouble aria-hidden="true" size={14} />
                <dt className="sr-only">Ambientes</dt>
                <dd>{property.rooms} amb.</dd>
              </div>
              <div className="flex items-center gap-1.5">
                <Bath aria-hidden="true" size={14} />
                <dt className="sr-only">Baños</dt>
                <dd>{property.bathrooms} baños</dd>
              </div>
            </dl>
            <div className="mt-5 flex flex-wrap gap-2">
              {property.tags.slice(0, 2).map((tag) => (
                <span
                  className="rounded-full border border-taupe/45 bg-ivory/55 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-label text-ink/75"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
