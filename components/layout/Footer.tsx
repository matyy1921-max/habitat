import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/shared/Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-ivory" id="contacto">
      <div className="habitat-container grid gap-12 py-20 md:grid-cols-4">
        <div>
          <Logo inverted />
          <p className="mt-8 text-[0.7rem] font-medium uppercase tracking-label text-ivory/55">
            © 2026 HÁBITAT. Buenos Aires.
          </p>
        </div>
        <div className="grid gap-8 md:col-span-3 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link className="text-xs font-medium uppercase tracking-label text-ivory/75 hover:text-ivory" href="#propiedades">
              Propiedades
            </Link>
            <Link className="text-xs font-medium uppercase tracking-label text-ivory/75 hover:text-ivory" href="#barrios">
              Barrios
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link className="text-xs font-medium uppercase tracking-label text-ivory/75 hover:text-ivory" href="#nosotros">
              Nosotros
            </Link>
            <Link className="text-xs font-medium uppercase tracking-label text-ivory/75 hover:text-ivory" href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link className="text-xs font-medium uppercase tracking-label text-ivory/75 hover:text-ivory" href="#visitas">
              Coordinar visita
            </Link>
            <span className="text-xs font-medium uppercase tracking-label text-ivory/55">
              {siteConfig.contact.address}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
