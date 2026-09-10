import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bath, BedDouble, Ruler } from "lucide-react";
import type { Property } from "@/data/properties";
import { Reveal } from "@/components/shared/Reveal";

type PropertyCardProps = {
  property: Property;
  priority?: boolean;
  delay?: number;
};

const currencyFormatter = new Intl.NumberFormat("es-AR");

export function PropertyCard({
  property,
  priority = false,
  delay = 0
}: PropertyCardProps) {
  return (
    <Reveal
      as="article"
      className="group transition-all duration-500 ease-out hover:-translate-y-1 hover:drop-shadow-[0_14px_32px_rgba(45,38,32,0.07)]"
      delay={delay}
    >
      <Link
        className="focus-ring block cursor-pointer"
        href={`/propiedades/${property.slug}`}
        target="_blank"
        rel="noreferrer"
        aria-label={`Abrir propiedad ${property.title} en una pestaña nueva`}
      >
        <div className="relative mb-6 aspect-[3/4] overflow-hidden rounded-[var(--radius-md)] bg-sand">
          <Image
            src={property.image}
            alt={property.imageAlt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 31vw, (min-width: 768px) 45vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-beige/0 transition-colors duration-700 group-hover:bg-beige/10" />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2 transition-transform duration-500 group-hover:-translate-y-0.5">
            {property.tags.map((tag) => (
              <span
                className="rounded-[var(--radius-sm)] border border-taupe/70 bg-ivory/95 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-label text-ink shadow-[0_2px_8px_rgba(41,38,35,0.06)] transition-transform duration-300 hover:-translate-y-px"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="arrow-link absolute bottom-4 left-4 inline-flex translate-y-3 items-center gap-2 rounded-[4px] bg-ink px-4 py-2 text-[0.64rem] font-medium uppercase tracking-label text-ivory opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            Ver propiedad
            <ArrowRight aria-hidden="true" size={14} />
          </span>
        </div>
        <div className="rounded-[var(--radius-md)] bg-ivory/45 p-4 shadow-[0_8px_24px_rgba(45,38,32,0.035)] transition-colors duration-300 group-hover:bg-ivory/70">
          <div className="mb-2 flex items-baseline justify-between gap-4">
            <h3 className="text-2xl font-light text-ink md:text-3xl">
              {property.title}
            </h3>
            <span className="label-caps">{property.modality}</span>
          </div>
          <p className="text-sm text-muted">{property.address}</p>
          <p className="label-caps mt-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-taupe" aria-hidden="true" />
            {property.availability}
          </p>
          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <span className="text-lg font-medium text-ink">
              {property.currency} {currencyFormatter.format(property.price)} / mes
            </span>
            <dl className="flex gap-3 text-xs text-muted">
              <div className="flex items-center gap-1">
                <Ruler aria-hidden="true" size={14} />
                <dt className="sr-only">Metros cuadrados</dt>
                <dd>{property.squareMeters}m²</dd>
              </div>
              <div className="flex items-center gap-1">
                <BedDouble aria-hidden="true" size={14} />
                <dt className="sr-only">Ambientes</dt>
                <dd>{property.rooms} amb.</dd>
              </div>
              <div className="flex items-center gap-1">
                <Bath aria-hidden="true" size={14} />
                <dt className="sr-only">Baños</dt>
                <dd>{property.bathrooms}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
