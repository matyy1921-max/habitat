import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, MapPin, MessageCircle, Ruler } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { siteConfig } from "@/config/site";
import { getProperty, getPropertySlugs } from "@/sanity/lib/properties";

type PropertyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getPropertySlugs();
}

export async function generateMetadata({
  params
}: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = await getProperty(slug);

  if (!property) {
    return {
      title: "Propiedad no encontrada | HÁBITAT"
    };
  }

  return {
    title: `${property.title} en alquiler | HÁBITAT`,
    description: `${property.address}. ${property.currency} ${property.price.toLocaleString(
      "es-AR"
    )} por mes. ${property.description}`
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = await getProperty(slug);

  if (!property) {
    notFound();
  }

  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.phone}?text=${encodeURIComponent(
    `Hola HÁBITAT, quiero consultar por ${property.address}, ${property.neighborhood}.`
  )}`;

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="habitat-container grid gap-10 py-section-sm lg:grid-cols-12 lg:py-section">
          <div className="lg:col-span-7">
            <div className="relative min-h-[430px] overflow-hidden bg-sand md:min-h-[620px]">
              <Image
                src={property.image}
                alt={property.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <span className="label-caps mb-4 block">{property.modality}</span>
            <h1 className="text-4xl font-light leading-tight md:text-6xl">
              {property.title}
            </h1>
            <p className="mt-4 flex items-center gap-2 text-muted">
              <MapPin aria-hidden="true" size={17} />
              {property.address}, {property.neighborhood}
            </p>
            <p className="mt-8 text-2xl font-medium">
              {property.currency} {property.price.toLocaleString("es-AR")} / mes
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-3 border-y border-taupe/50 py-5 text-sm text-muted">
              <div>
                <dt className="label-caps mb-1">M²</dt>
                <dd>{property.squareMeters}</dd>
              </div>
              <div>
                <dt className="label-caps mb-1">Amb.</dt>
                <dd>{property.rooms}</dd>
              </div>
              <div>
                <dt className="label-caps mb-1">Baños</dt>
                <dd>{property.bathrooms}</dd>
              </div>
            </dl>
            <p className="mt-8 leading-7 text-muted">{property.description}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {property.tags.map((tag) => (
                <span className="border border-taupe/50 px-3 py-1 label-caps" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              <Link
                className="focus-ring inline-flex items-center justify-center gap-2 bg-ink px-5 py-4 text-xs font-medium uppercase tracking-label text-ivory transition-colors hover:bg-taupe hover:text-ink"
                href="#visita"
              >
                <CalendarDays aria-hidden="true" size={16} />
                Coordinar visita
              </Link>
              <a
                className="focus-ring inline-flex items-center justify-center gap-2 border border-ink px-5 py-4 text-xs font-medium uppercase tracking-label text-ink transition-colors hover:bg-sand"
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle aria-hidden="true" size={16} />
                WhatsApp
              </a>
            </div>
          </aside>
        </section>
        <section className="bg-dusty py-section-sm" id="visita">
          <div className="habitat-container grid gap-8 md:grid-cols-3">
            {[
              ["Galería", "Preparada para sumar más fotografías, planos y recorridos."],
              ["Disponibilidad", "Lista para conectarse con calendario y franjas reales."],
              ["Ubicación", "Espacio reservado para mapa con coordenadas por propiedad."]
            ].map(([title, text]) => (
              <article className="border-t border-taupe/60 pt-5" key={title}>
                <Ruler aria-hidden="true" className="mb-6 text-muted" size={18} />
                <h2 className="text-2xl font-light">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
