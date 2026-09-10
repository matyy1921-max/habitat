import { defineQuery } from "next-sanity";

const propertyFields = `
  _id,
  title,
  "slug": slug.current,
  address,
  neighborhood,
  price,
  currency,
  modality,
  squareMeters,
  rooms,
  bathrooms,
  availability,
  availableDate,
  tags,
  "image": image.asset->url,
  imageAlt,
  description,
  latitude,
  longitude,
  featured,
  published
`;

export const PROPERTIES_QUERY = defineQuery(`
  *[_type == "property" && published != false && defined(slug.current)]
    | order(featured desc, _createdAt desc) {
      ${propertyFields}
    }
`);

export const PROPERTY_BY_SLUG_QUERY = defineQuery(`
  *[_type == "property" && published != false && slug.current == $slug][0] {
    ${propertyFields}
  }
`);

export const PROPERTY_SLUGS_QUERY = defineQuery(`
  *[_type == "property" && published != false && defined(slug.current)] {
    "slug": slug.current
  }
`);

