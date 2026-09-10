import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/home/AboutSection";
import { BookingSection } from "@/components/home/BookingSection";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { MapSection } from "@/components/home/MapSection";
import { Neighborhoods } from "@/components/home/Neighborhoods";
import { OwnersCta } from "@/components/home/OwnersCta";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { getProperties } from "@/sanity/lib/properties";

export default async function HomePage() {
  const properties = await getProperties();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProperties properties={properties} />
        <Neighborhoods />
        <MapSection properties={properties} />
        <ProcessSection />
        <BookingSection properties={properties} />
        <AboutSection />
        <OwnersCta />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
