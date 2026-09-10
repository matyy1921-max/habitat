"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Filter } from "lucide-react";
import { useState } from "react";
import type { Property } from "@/data/properties";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const LeafletMap = dynamic(() => import("@/components/home/LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-[460px] items-center justify-center bg-[#F0EBE1]">
      <span className="label-caps">Cargando mapa de Buenos Aires</span>
    </div>
  )
});

type MapSectionProps = {
  properties: Property[];
};

export function MapSection({ properties }: MapSectionProps) {
  const [activePropertyId, setActivePropertyId] = useState(
    properties[1]?.id ?? properties[0]?.id ?? ""
  );

  return (
    <section className="habitat-container py-section-sm md:py-section" id="mapa">
      <Reveal>
        <SectionHeading
          eyebrow="Explorá el mapa"
          title="Encontrá tu próximo lugar desde el mapa."
          className="mb-10"
        />
      </Reveal>
      <Reveal delay={140}>
        <div className="grid min-h-[680px] overflow-hidden rounded-[var(--radius-lg)] border border-taupe/40 shadow-[0_12px_34px_rgba(45,38,32,0.055)] md:grid-cols-[0.38fr_0.62fr]">
          <aside className="bg-ivory p-5 md:rounded-r-[18px] md:shadow-[10px_0_28px_rgba(45,38,32,0.045)]">
            <div className="mb-8 flex items-center justify-between rounded-full bg-sand/35 px-4 py-3">
              <span className="label-caps">
                {properties.length} propiedades
              </span>
              <button
                className="focus-ring text-muted transition-colors hover:text-ink"
                type="button"
                aria-label="Filtrar propiedades del mapa"
              >
                <Filter aria-hidden="true" size={18} />
              </button>
            </div>
            <div className="space-y-5">
              {properties.map((property) => {
                const active = activePropertyId === property.id;

                return (
                  <Link
                    className={`focus-ring grid grid-cols-[88px_1fr] gap-4 rounded-[var(--radius-md)] p-2 transition-all duration-300 ${
                      active
                        ? "bg-sand/45 shadow-[0_6px_18px_rgba(45,38,32,0.05)]"
                        : "hover:bg-sand/25"
                    }`}
                    href={`/propiedades/${property.slug}`}
                    target="_blank"
                    rel="noreferrer"
                    key={property.id}
                    onMouseEnter={() => setActivePropertyId(property.id)}
                    onFocus={() => setActivePropertyId(property.id)}
                    onClick={() => setActivePropertyId(property.id)}
                  >
                    <div className="relative min-h-[88px] overflow-hidden bg-sand">
                      <Image
                        src={property.image}
                        alt={property.imageAlt}
                        fill
                        sizes="88px"
                        className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-ink">
                        {property.title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-muted">
                        {property.address}
                      </p>
                      <p className="mt-3 text-sm font-medium text-ink">
                        {property.currency}{" "}
                        {property.price.toLocaleString("es-AR")} / mes
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </aside>
          <div className="relative min-h-[460px] overflow-hidden bg-[#F0EBE1]">
            <LeafletMap
              properties={properties}
              activePropertyId={activePropertyId}
              onActivePropertyChange={setActivePropertyId}
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
