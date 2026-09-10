import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ServicesValuationSection } from "@/components/home/ServicesValuationSection";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

export const metadata: Metadata = {
  title: "Propietarios | HÁBITAT",
  description:
    "Valoración y gestión de propiedades en Buenos Aires con una mirada cercana, clara y personalizada."
};

export default function PropietariosPage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <ServicesValuationSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
