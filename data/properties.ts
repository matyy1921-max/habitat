export type PropertyTag =
  | "PET FRIENDLY"
  | "PISCINA"
  | "BALCÓN"
  | "TERRAZA"
  | "PAQUETE COMPLETO"
  | "AMOBLADO"
  | "A ESTRENAR";

export type Property = {
  id: string;
  slug: string;
  title: string;
  address: string;
  neighborhood: string;
  price: number;
  currency: "USD" | "ARS";
  modality: "Alquiler" | "Venta";
  squareMeters: number;
  rooms: number;
  bathrooms: number;
  availability: string;
  availableDate: string;
  tags: PropertyTag[];
  image: string;
  imageAlt: string;
  description: string;
  latitude?: number;
  longitude?: number;
};

export const propertyImages = {
  balcony:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBa0tTxzMDFZ_FzxkixXp_2_YybRTu_XG7tHCUBZpD8NwIAeYOO7KurbPwrFDzYn7d-ifgnF0GRIXxZiIVTPzceg3F_zKGdrB16DdVLoKxRHy37ML8OmbpIAnjI4uoLvzy9LakZj9erRm1_-ZmuiDqCwEuTWnjeICiP_KO6f3aIdXKvJ0XqbLWGvko2CtiSPVaqQI8gODC3nM6iAdSVxnNld054kYg-3z_gslQZrsiuIx7JbHxt7_ImEw",
  living:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAsAMICsAdSNBinfTvlp33mG1hu5BeMROH7wX3yB0jFq2_vtH4wvvIH1P_BzhX3fw08GKNOnIBQwnjyWC75vpUkh5895n0nyZlRJnJCNDMmg2ckX9adxWiSsDO53MkBguddOjCztH6sYZCIjZyh-T0411ko0h866K6PAzrd6FnQwCzNrjGh5XMjpdoxgOhJgHZNYdVLoosCGORIRlzQUmhTyVLfLB--LCtCGD-TMhXoTtWW0glRorM5aA",
  kitchen:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB57S5vyM41xrGm7UMEMUY5DYlnuYXeBTbN5onJXrFfZpbmixBPRw9KHIZQdBCqUcOneTjArDgroGQeohKrcPtk9u_LPTz7qdKX7Pd3d5CU3ljIhq7GplOHsebXmdlO7C9UX6F2GJXSfgKHA5QWPndSXoOP8SjbvfRMn1VonXx7b_R2ndmCC99_eQG7G3iYUMvGXbImlbEtR5qvpFN9LZ7G9IltJAPMLROR-3JUZpSBYOis1-lk_dU4Zw"
} as const;

export const featuredProperties: Property[] = [
  {
    id: "palermo-chico-libertador",
    slug: "palermo-chico-libertador",
    title: "Palermo Chico",
    address: "Av. Libertador al 2900",
    neighborhood: "Palermo",
    price: 1500,
    currency: "USD",
    modality: "Alquiler",
    squareMeters: 120,
    rooms: 4,
    bathrooms: 2,
    availability: "Disponible ahora",
    availableDate: "2026-09-01",
    tags: ["PET FRIENDLY", "BALCÓN"],
    image: "/properties/palermochico.jpg",
    imageAlt:
      "Balcón luminoso con plantas y vista a una calle arbolada de Buenos Aires.",
    description:
      "Un departamento amplio y sereno, con luz natural, balcones verdes y una ubicación conectada para vivir Buenos Aires con calma.",
    latitude: -34.577,
    longitude: -58.408
  },
  {
    id: "colegiales-concepcion",
    slug: "colegiales-concepcion-arenal",
    title: "Colegiales",
    address: "Concepción Arenal 3200",
    neighborhood: "Colegiales",
    price: 1200,
    currency: "USD",
    modality: "Alquiler",
    squareMeters: 85,
    rooms: 3,
    bathrooms: 1,
    availability: "Disponible 14 sep",
    availableDate: "2026-09-14",
    tags: ["TERRAZA", "AMOBLADO"],
    image: "/properties/colegiales.jpg",
    imageAlt:
      "Living minimalista con sofá claro, ventana geométrica y luz natural.",
    description:
      "Un espacio práctico y cálido en una zona barrial, con terraza propia y mobiliario listo para entrar.",
    latitude: -34.574,
    longitude: -58.449
  },
  {
    id: "belgrano-r-la-pampa",
    slug: "belgrano-r-la-pampa",
    title: "Belgrano R",
    address: "La Pampa 3500",
    neighborhood: "Belgrano",
    price: 1800,
    currency: "USD",
    modality: "Alquiler",
    squareMeters: 150,
    rooms: 5,
    bathrooms: 3,
    availability: "Disponible ahora",
    availableDate: "2026-09-01",
    tags: ["A ESTRENAR", "PISCINA"],
    image: "/properties/belgrano-r.jpg",
    imageAlt:
      "Cocina moderna con madera cálida, mesada de concreto y grifería negra.",
    description:
      "Un hogar contemporáneo de escala generosa, pensado para combinar vida familiar, reuniones y descanso.",
    latitude: -34.562,
    longitude: -58.456
  }
];

export const getPropertyBySlug = (slug: string) =>
  featuredProperties.find((property) => property.slug === slug);
