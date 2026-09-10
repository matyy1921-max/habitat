export const siteConfig = {
  name: "HÁBITAT",
  description:
    "Alquileres seleccionados en Buenos Aires para encontrar un lugar que se sienta tuyo.",
  whatsapp: {
    phone: "5491123456789",
    message: "Hola, quiero consultar por una propiedad de HÁBITAT.",
    messages: {
      property: "Hola, quiero consultar por una propiedad de HÁBITAT.",
      valuation:
        "Hola, quiero consultar por la valoración y gestión de mi propiedad."
    }
  },
  contact: {
    email: "hola@habitat.ar",
    address: "Buenos Aires, Argentina"
  },
  locale: {
    default: "es",
    available: ["es", "en"]
  }
} as const;
