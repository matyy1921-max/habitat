import { defineField, defineType } from "sanity";

const propertyTags = [
  "PET FRIENDLY",
  "PISCINA",
  "BALCÓN",
  "TERRAZA",
  "PAQUETE COMPLETO",
  "AMOBLADO",
  "A ESTRENAR"
];

export const propertyType = defineType({
  name: "property",
  title: "Propiedad",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nombre",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "slug",
      title: "URL",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "address",
      title: "Dirección",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "neighborhood",
      title: "Barrio",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "price",
      title: "Precio",
      type: "number",
      validation: (rule) => rule.required().positive()
    }),
    defineField({
      name: "currency",
      title: "Moneda",
      type: "string",
      initialValue: "USD",
      options: {
        list: ["USD", "ARS"],
        layout: "radio"
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "modality",
      title: "Operación",
      type: "string",
      initialValue: "Alquiler",
      options: {
        list: ["Alquiler", "Venta"],
        layout: "radio"
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "squareMeters",
      title: "Metros cuadrados",
      type: "number",
      validation: (rule) => rule.required().positive()
    }),
    defineField({
      name: "rooms",
      title: "Ambientes",
      type: "number",
      validation: (rule) => rule.required().integer().positive()
    }),
    defineField({
      name: "bathrooms",
      title: "Baños",
      type: "number",
      validation: (rule) => rule.required().integer().min(0)
    }),
    defineField({
      name: "availability",
      title: "Disponibilidad",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "availableDate",
      title: "Fecha disponible",
      type: "date",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "tags",
      title: "Etiquetas",
      type: "array",
      of: [
        {
          type: "string",
          options: {
            list: propertyTags
          }
        }
      ]
    }),
    defineField({
      name: "image",
      title: "Imagen principal",
      type: "image",
      options: {
        hotspot: true
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "imageAlt",
      title: "Texto alternativo de imagen",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "latitude",
      title: "Latitud",
      type: "number"
    }),
    defineField({
      name: "longitude",
      title: "Longitud",
      type: "number"
    }),
    defineField({
      name: "featured",
      title: "Destacada",
      type: "boolean",
      initialValue: true
    }),
    defineField({
      name: "published",
      title: "Publicada",
      type: "boolean",
      initialValue: true
    })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "address",
      media: "image"
    }
  }
});

