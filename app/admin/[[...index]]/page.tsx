import type { Metadata } from "next";
import type { Viewport } from "next";
import { NextStudio, viewport as studioViewport } from "next-sanity/studio";
import config from "@/sanity.config";
import { isSanityConfigured } from "@/sanity/env";

export const dynamic = "force-static";

export const metadata: Metadata = {
  robots: {
    follow: false,
    index: false
  },
  title: "Admin | HÁBITAT"
};

export const viewport: Viewport = {
  ...studioViewport
};

export default function AdminPage() {
  if (!isSanityConfigured) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F4EFE6] px-6 text-[#302C27]">
        <section className="max-w-xl rounded-2xl border border-[#B8A99A]/45 bg-[#FFFDF7]/80 p-8 shadow-[0_18px_50px_rgba(48,44,39,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7D6F62]">
            HÁBITAT Admin
          </p>
          <h1 className="mt-4 text-3xl font-light leading-tight">
            Falta conectar el proyecto de Sanity.
          </h1>
          <p className="mt-4 text-sm leading-7 text-[#665B51]">
            Creá el proyecto en Sanity y agregá las variables
            NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET y
            NEXT_PUBLIC_SANITY_API_VERSION para activar el panel.
          </p>
        </section>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
