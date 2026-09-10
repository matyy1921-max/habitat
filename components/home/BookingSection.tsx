"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import type { Property } from "@/data/properties";
import { Reveal } from "@/components/shared/Reveal";

const days = [31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const weekDays = ["LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB", "DOM"];
const times = ["10:00", "11:30", "14:00", "16:30", "18:00"];

type BookingSectionProps = {
  properties: Property[];
};

export function BookingSection({ properties }: BookingSectionProps) {
  const [propertyId, setPropertyId] = useState(properties[0]?.id ?? "");
  const [day, setDay] = useState(15);
  const [time, setTime] = useState("14:00");
  const [confirmed, setConfirmed] = useState(false);

  const selectedProperty = useMemo(
    () =>
      properties.find((property) => property.id === propertyId) ??
      properties[0],
    [properties, propertyId]
  );

  return (
    <section className="bg-dusty py-section-sm md:py-section" id="visitas">
      <Reveal className="habitat-container">
        <div className="overflow-hidden rounded-[var(--radius-lg)] border border-taupe/60 bg-ivory/[0.82] shadow-[0_8px_30px_rgba(45,38,32,0.05)]">
          <div className="grid gap-12 p-6 md:p-10 lg:grid-cols-12 lg:p-12">
            <div className="lg:col-span-5">
              <span className="eyebrow-pill mb-4">Coordiná tu visita</span>
              <h2 className="max-w-xl text-4xl font-light leading-tight text-ink md:text-5xl">
              Conocé tu próximo lugar <span className="text-[var(--accent)]">cuando quieras.</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-muted md:text-base">
                Elegí la propiedad, seleccioná un día y encontrá el horario que mejor te quede.
              </p>

              <label className="mt-9 block">
                <span className="label-caps mb-3 block text-ink/75">Propiedad</span>
                <select
                  className="w-full rounded-[var(--radius-sm)] border border-taupe/70 bg-ivory px-4 py-3 text-sm text-ink outline-none transition-colors duration-300 focus:border-ink"
                  value={propertyId}
                  onChange={(event) => setPropertyId(event.target.value)}
                >
                  {properties.map((property) => (
                    <option value={property.id} key={property.id}>
                      {property.address}, {property.neighborhood}
                    </option>
                  ))}
                </select>
              </label>

              {selectedProperty ? (
                <div
                  className="mt-6 grid grid-cols-[88px_1fr] gap-4 rounded-[var(--radius-md)] border border-taupe/60 bg-ivory p-4 transition-colors duration-500"
                  key={selectedProperty.id}
                >
                  <div className="relative min-h-[88px] overflow-hidden rounded-[var(--radius-sm)] bg-sand">
                    <Image
                      src={selectedProperty.image}
                      alt={selectedProperty.imageAlt}
                      fill
                      sizes="88px"
                      className="image-reveal is-visible object-cover"
                    />
                  </div>
                  <div>
                    <p className="label-caps mb-1 text-muted">Propiedad seleccionada</p>
                    <p className="text-sm font-medium text-ink">
                      {selectedProperty.address}, {selectedProperty.neighborhood}
                    </p>
                    <p className="mt-2 text-sm text-muted">
                      {selectedProperty.currency}{" "}
                      {selectedProperty.price.toLocaleString("es-AR")} / mes
                    </p>
                  </div>
                </div>
              ) : null}

              <div className="mt-8 rounded-[var(--radius-md)] border border-taupe/50 bg-ivory/70 p-4">
                <p className="label-caps mb-4 text-ink/75">
                  Horarios disponibles para el {day} de septiembre
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {times.map((slot) => (
                    <button
                      className={`focus-ring border px-3 py-3 text-xs font-semibold transition-all duration-300 ${
                        time === slot
                          ? "scale-[1.01] border-beige bg-beige text-ink"
                          : "border-taupe/60 text-muted hover:-translate-y-px hover:bg-sand/60 hover:text-ink"
                      }`}
                      onClick={() => setTime(slot)}
                      type="button"
                      key={slot}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="rounded-[var(--radius-md)] border border-taupe/45 bg-ivory/95 p-5 shadow-[0_10px_26px_rgba(45,38,32,0.045)] md:p-8">
                <div className="mb-8 flex items-center justify-between rounded-full bg-sand/35 px-4 py-3">
                  <h3 className="label-caps text-ink">Septiembre 2026</h3>
                  <div className="flex gap-3 text-muted">
                    <button className="focus-ring transition-colors hover:text-ink" type="button" aria-label="Mes anterior">
                      <ChevronLeft aria-hidden="true" size={18} />
                    </button>
                    <button className="focus-ring text-ink transition-colors hover:text-muted" type="button" aria-label="Mes siguiente">
                      <ChevronRight aria-hidden="true" size={18} />
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-y-3 text-center">
                  {weekDays.map((weekDay) => (
                    <div className="text-[0.64rem] font-semibold text-muted" key={weekDay}>
                      {weekDay}
                    </div>
                  ))}
                  {days.map((calendarDay, index) => {
                    const disabled = index === 0;
                    const available = calendarDay >= 16 && calendarDay <= 18;

                    return (
                      <button
                        className={`focus-ring mx-auto h-10 w-10 text-xs font-medium transition-all duration-300 ${
                          day === calendarDay
                            ? "scale-105 rounded-[var(--radius-sm)] bg-ink text-ivory"
                            : disabled
                              ? "text-muted/55"
                              : available
                                ? "rounded-[var(--radius-sm)] border border-taupe/60 text-ink hover:bg-sand/50"
                                : "rounded-[var(--radius-sm)] text-muted hover:bg-sand/40 hover:text-ink"
                        }`}
                        disabled={disabled}
                        onClick={() => setDay(calendarDay)}
                        type="button"
                        key={`${calendarDay}-${index}`}
                      >
                        {calendarDay}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <form className="grid gap-6 bg-sand/25 p-6 md:grid-cols-4 md:items-end md:p-10 lg:p-12">
            <BookingField label="Nombre y apellido" placeholder="Tu nombre" type="text" />
            <BookingField label="WhatsApp" placeholder="+54 ..." type="tel" />
            <BookingField label="Email" placeholder="hola@correo.com" type="email" />
            <button
              className="arrow-link focus-ring inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-ink px-7 py-4 text-xs font-medium uppercase tracking-label text-ivory transition-colors duration-300 hover:bg-taupe hover:text-ink"
              onClick={() => setConfirmed(true)}
              type="button"
            >
              Confirmar visita
              <ArrowRight aria-hidden="true" size={14} />
            </button>
          </form>
        </div>

        {confirmed ? (
          <p className="label-caps mt-6 text-center text-ink" role="status">
            Visita preconfirmada para el {day}/09 a las {time}. Te contactaremos por WhatsApp.
          </p>
        ) : null}
      </Reveal>
    </section>
  );
}

type BookingFieldProps = {
  label: string;
  placeholder: string;
  type: "text" | "tel" | "email";
};

function BookingField({ label, placeholder, type }: BookingFieldProps) {
  return (
    <label className="block">
      <span className="label-caps mb-2 block text-ink/75">{label}</span>
      <input
        className="w-full rounded-[var(--radius-sm)] border border-taupe/60 bg-ivory/70 px-3 py-3 text-sm text-ink outline-none transition-colors duration-300 placeholder:text-[#9F8E7D] focus:border-ink focus:bg-ivory"
        placeholder={placeholder}
        type={type}
      />
    </label>
  );
}
