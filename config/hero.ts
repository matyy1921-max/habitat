import { propertyImages } from "@/data/properties";

// Hero image - replaceable brand asset
export const heroMediaType: "image" | "video" = "video";

export const heroImage = {
  src: propertyImages.living,
  alt: "Departamento cálido y luminoso en Buenos Aires con luz natural y materiales nobles."
} as const;

export const heroVideo = {
  desktopSrc: "/media/habitat-hero.mp4",
  mobileSrc: null,
  poster: heroImage.src
} as const;
