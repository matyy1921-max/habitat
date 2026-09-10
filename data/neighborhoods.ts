export type Neighborhood = {
  name: string;
  description: string;
  image: string;
};

export const neighborhoods: Neighborhood[] = [
  {
    name: "Recoleta",
    description: "Arquitectura clásica, plazas y vida urbana pausada.",
    image: "/neighborhoods/recoleta.jpg"
  },
  {
    name: "Palermo",
    description: "Verde, gastronomía y departamentos con carácter.",
    image: "/neighborhoods/palermo.jpg"
  },
  {
    name: "Belgrano",
    description: "Escala residencial, luz y conexión cotidiana.",
    image: "/neighborhoods/belgrano.jpg"
  },
  {
    name: "Colegiales",
    description: "Calles tranquilas, cafés y cercanía con todo.",
    image: "/neighborhoods/colegiales.jpg"
  },
  {
    name: "Caballito",
    description: "Ritmo de barrio, avenidas nobles y vida cotidiana luminosa.",
    image: "/neighborhoods/caballito.jpg"
  },
  {
    name: "Núñez",
    description: "Cercanía al río, calma residencial y balcones abiertos.",
    image: "/neighborhoods/nunez.jpg"
  }
];
