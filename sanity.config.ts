"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { dataset, studioProjectId } from "@/sanity/env";
import { schemaTypes } from "@/sanity/schemaTypes";

export default defineConfig({
  basePath: "/admin",
  dataset,
  projectId: studioProjectId,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes
  },
  title: "HÁBITAT Admin"
});

