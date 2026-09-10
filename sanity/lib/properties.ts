import { featuredProperties, getPropertyBySlug } from "@/data/properties";
import type { Property, PropertyTag } from "@/data/properties";
import { sanityClient } from "@/sanity/lib/client";
import {
  PROPERTIES_QUERY,
  PROPERTY_BY_SLUG_QUERY,
  PROPERTY_SLUGS_QUERY
} from "@/sanity/lib/queries";

type SanityProperty = Omit<Property, "id" | "slug" | "image"> & {
  _id: string;
  slug?: string;
  image?: string;
  featured?: boolean;
  published?: boolean;
};

const fallbackImage = featuredProperties[0]?.image ?? "/properties/palermochico.jpg";
const fallbackImageAlt =
  featuredProperties[0]?.imageAlt ?? "Departamento luminoso en Buenos Aires.";

function normalizeTags(tags?: string[]): PropertyTag[] {
  return (tags ?? []).filter(Boolean) as PropertyTag[];
}

function toProperty(document: SanityProperty): Property | null {
  if (!document.slug || !document.title) {
    return null;
  }

  return {
    id: document._id,
    slug: document.slug,
    title: document.title,
    address: document.address,
    neighborhood: document.neighborhood,
    price: document.price,
    currency: document.currency,
    modality: document.modality,
    squareMeters: document.squareMeters,
    rooms: document.rooms,
    bathrooms: document.bathrooms,
    availability: document.availability,
    availableDate: document.availableDate,
    tags: normalizeTags(document.tags),
    image: document.image || fallbackImage,
    imageAlt: document.imageAlt || fallbackImageAlt,
    description: document.description,
    latitude: document.latitude,
    longitude: document.longitude
  };
}

export async function getProperties(): Promise<Property[]> {
  if (!sanityClient) {
    return featuredProperties;
  }

  try {
    const documents = await sanityClient.fetch<SanityProperty[]>(
      PROPERTIES_QUERY,
      {},
      { next: { revalidate: 60 } }
    );
    const properties = documents.map(toProperty).filter(Boolean) as Property[];

    return properties.length > 0 ? properties : featuredProperties;
  } catch {
    return featuredProperties;
  }
}

export async function getProperty(slug: string): Promise<Property | undefined> {
  if (!sanityClient) {
    return getPropertyBySlug(slug);
  }

  try {
    const document = await sanityClient.fetch<SanityProperty | null>(
      PROPERTY_BY_SLUG_QUERY,
      { slug },
      { next: { revalidate: 60 } }
    );
    const property = document ? toProperty(document) : null;

    return property ?? getPropertyBySlug(slug);
  } catch {
    return getPropertyBySlug(slug);
  }
}

export async function getPropertySlugs(): Promise<{ slug: string }[]> {
  if (!sanityClient) {
    return featuredProperties.map((property) => ({ slug: property.slug }));
  }

  try {
    const slugs = await sanityClient.fetch<{ slug?: string }[]>(
      PROPERTY_SLUGS_QUERY,
      {},
      { next: { revalidate: 60 } }
    );
    const normalizedSlugs = slugs
      .map(({ slug }) => slug)
      .filter(Boolean)
      .map((slug) => ({ slug: slug as string }));

    return normalizedSlugs.length > 0
      ? normalizedSlugs
      : featuredProperties.map((property) => ({ slug: property.slug }));
  } catch {
    return featuredProperties.map((property) => ({ slug: property.slug }));
  }
}

