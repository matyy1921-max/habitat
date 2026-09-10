"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { neighborhoods } from "@/data/neighborhoods";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { Reveal } from "@/components/shared/Reveal";

const loopedNeighborhoods = [...neighborhoods, ...neighborhoods];
const counts = [12, 18, 9, 7];

export function Neighborhoods() {
  const reducedMotion = useReducedMotion();
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const beginDrag = (clientX: number) => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    setDragging(true);
    setStartX(clientX);
    setScrollLeft(scroller.scrollLeft);
  };

  const moveDrag = (clientX: number) => {
    const scroller = scrollerRef.current;

    if (!dragging || !scroller) {
      return;
    }

    scroller.scrollLeft = scrollLeft - (clientX - startX);
  };

  return (
    <section className="bg-dusty py-section-sm md:py-section" id="barrios">
      <Reveal className="habitat-container mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span className="eyebrow-dot mb-4">Explorá Buenos Aires</span>
          <h2 className="max-w-4xl text-4xl font-light leading-tight text-ink md:text-5xl lg:text-6xl">
            Buenos Aires, <span className="text-[var(--accent)]">barrio por barrio.</span>
          </h2>
        </div>
        <span className="label-caps hidden md:inline-flex">
          Arrastrá para explorar
          <span className="ml-2 inline-block animate-[slide-hint_1.8s_ease-in-out_infinite] motion-reduce:animate-none">
            →
          </span>
        </span>
      </Reveal>
      <div
        className="marquee-shell cursor-grab overflow-hidden active:cursor-grabbing"
        onMouseDown={(event) => beginDrag(event.clientX)}
        onMouseMove={(event) => moveDrag(event.clientX)}
        onMouseLeave={() => setDragging(false)}
        onMouseUp={() => setDragging(false)}
      >
        <div
          ref={scrollerRef}
          className="overflow-x-auto px-5 pb-4 md:px-10 lg:px-16"
          onTouchStart={(event) => beginDrag(event.touches[0].clientX)}
          onTouchMove={(event) => moveDrag(event.touches[0].clientX)}
          onTouchEnd={() => setDragging(false)}
        >
          <div
            className={`flex w-max snap-x gap-8 ${
              reducedMotion ? "" : "marquee-track"
            } ${
              dragging ? "[animation-play-state:paused]" : ""
            }`}
          >
            {loopedNeighborhoods.map((neighborhood, index) => {
              const realIndex = index % neighborhoods.length;

              return (
                <article
                  className="group w-[76vw] shrink-0 snap-center md:w-[320px] lg:w-[360px]"
                  key={`${neighborhood.name}-${index}`}
                >
                  <div
                    className={`relative mb-4 overflow-hidden rounded-[var(--radius-lg)] bg-sand ${
                      realIndex % 2 === 0 ? "h-[390px]" : "h-[450px]"
                    }`}
                  >
                    <Image
                      src={neighborhood.image}
                      alt={`Vista editorial de ${neighborhood.name}, Buenos Aires.`}
                      fill
                      sizes="(min-width: 1024px) 360px, 76vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(41,38,35,0.42)_0%,rgba(41,38,35,0.10)_32%,transparent_62%)] opacity-70 transition-opacity duration-700 group-hover:opacity-90" />
                    <div className="absolute inset-x-4 bottom-4 rounded-[var(--radius-md)] border border-ivory/35 bg-ivory/[0.88] p-4 text-ink shadow-[0_6px_22px_rgba(41,38,35,0.08)] backdrop-blur-[2px] transition-transform duration-500 group-hover:-translate-y-1">
                      <h3 className="text-2xl font-light md:text-3xl">
                        {neighborhood.name}
                      </h3>
                      <p className="label-caps mt-1 text-muted">
                        {counts[realIndex]} propiedades
                      </p>
                    </div>
                  </div>
                  <div className="transition-transform duration-500 group-hover:-translate-y-1">
                    <p className="mt-2 max-w-xs text-sm leading-6 text-muted">
                      {neighborhood.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
