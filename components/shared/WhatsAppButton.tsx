"use client";

import { useState } from "react";
import { Building2, Home, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  const options = [
    {
      label: "Consultar propiedad",
      message: siteConfig.whatsapp.messages.property,
      Icon: Home
    },
    {
      label: "Valoración y propietarios",
      message: siteConfig.whatsapp.messages.valuation,
      Icon: Building2
    }
  ];

  return (
    <div
      className="whatsapp-enter fixed bottom-5 right-5 z-50 md:bottom-8 md:right-8"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div
        className={`absolute bottom-16 right-0 grid w-64 gap-2 transition-all duration-300 md:bottom-[4.5rem] ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        {options.map(({ Icon, label, message }) => (
          <a
            className="focus-ring group flex items-center gap-3 rounded-[var(--radius-md)] border border-taupe/55 bg-ivory/95 px-4 py-3 text-left text-ink shadow-[0_8px_24px_rgba(45,38,32,0.08)] backdrop-blur-[1.5px] transition-all duration-300 hover:-translate-y-px hover:border-ink/50"
            href={`https://wa.me/${
              siteConfig.whatsapp.phone
            }?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noreferrer"
            key={label}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-taupe/55 text-ink transition-colors duration-300 group-hover:bg-sand/55">
              <Icon aria-hidden="true" size={16} strokeWidth={1.6} />
            </span>
            <span className="text-xs font-semibold uppercase tracking-label">
              {label}
            </span>
          </a>
        ))}
      </div>
      <button
        className="focus-ring group flex h-12 w-12 items-center justify-center rounded-full border border-taupe/65 bg-ink text-ivory shadow-[0_8px_24px_rgba(41,38,35,0.16)] transition-transform hover:scale-105 md:h-14 md:w-14"
        type="button"
        aria-label="Abrir opciones de WhatsApp"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <MessageCircle aria-hidden="true" size={22} />
        <span className="pointer-events-none absolute right-14 top-1/2 hidden -translate-y-1/2 translate-x-2 whitespace-nowrap bg-ink px-4 py-2 text-xs font-medium text-ivory opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
          WhatsApp
        </span>
      </button>
    </div>
  );
}
