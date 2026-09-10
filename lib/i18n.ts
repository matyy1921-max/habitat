export type Locale = "es" | "en";

export const dictionary = {
  es: {
    navigation: {
      properties: "Propiedades",
      neighborhoods: "Barrios",
      map: "Mapa",
      about: "Nosotros",
      contact: "Contacto",
      bookVisit: "Coordinar visita"
    },
    common: {
      search: "Buscar",
      rent: "Alquiler",
      viewProperty: "Ver propiedad"
    }
  },
  en: {
    navigation: {
      properties: "Properties",
      neighborhoods: "Neighborhoods",
      map: "Map",
      about: "About",
      contact: "Contact",
      bookVisit: "Book a visit"
    },
    common: {
      search: "Search",
      rent: "Rent",
      viewProperty: "View property"
    }
  }
} satisfies Record<Locale, Record<string, unknown>>;
