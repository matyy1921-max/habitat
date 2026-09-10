"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

const steps = [
  {
    title: "BUSCÁ",
    text: "Explorá una selección de propiedades pensadas para tu estilo de vida."
  },
  {
    title: "NOS ADAPTAMOS",
    text: "Conversamos sobre tu situación particular para encontrar el encaje perfecto."
  },
  {
    title: "FIRMAMOS",
    text: "Gestión transparente y sin vueltas innecesarias."
  }
];

type TransitionPhase = "idle" | "leaving" | "entering";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const leaveTimer = useRef<number | null>(null);
  const enterTimer = useRef<number | null>(null);
  const currentStep = steps[activeStep];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (leaveTimer.current) {
        window.clearTimeout(leaveTimer.current);
      }

      if (enterTimer.current) {
        window.clearTimeout(enterTimer.current);
      }
    };
  }, []);

  const showStep = (stepIndex: number) => {
    if (stepIndex === activeStep || phase !== "idle") {
      return;
    }

    if (prefersReducedMotion) {
      setActiveStep(stepIndex);
      return;
    }

    setPhase("leaving");

    leaveTimer.current = window.setTimeout(() => {
      setActiveStep(stepIndex);
      setPhase("entering");

      enterTimer.current = window.setTimeout(() => {
        setPhase("idle");
      }, 30);
    }, 210);
  };

  const showNextStep = () => {
    showStep((activeStep + 1) % steps.length);
  };

  return (
    <section className="bg-sand py-section-sm md:py-section">
      <div className="habitat-container">
        <Reveal className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
          <span className="eyebrow-pill mx-auto mb-4">
            UNA FORMA MÁS SIMPLE
          </span>
          <h2 className="text-4xl font-light leading-tight md:text-5xl">
            Alquileres a tu medida, con un proceso ágil y humano.
          </h2>
        </Reveal>
        <Reveal className="mx-auto max-w-[820px]">
          <article className="group overflow-hidden rounded-[14px] border border-taupe/55 bg-ivory/70 px-6 py-7 text-ink shadow-[0_14px_38px_rgba(45,38,32,0.055)] md:px-10 md:py-9">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div
                className={`transition-all duration-[360ms] ease-out ${
                  phase === "leaving"
                    ? "-translate-x-4 opacity-0"
                    : phase === "entering"
                      ? "translate-x-4 opacity-0"
                      : "translate-x-0 opacity-100"
                }`}
              >
                <h3 className="text-4xl font-light leading-tight md:text-5xl">
                  {currentStep.title}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-7 text-muted md:text-lg md:leading-8">
                  {currentStep.text}
                </p>
              </div>
              <button
                className="focus-ring ml-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink/70 bg-ink text-ivory shadow-[0_8px_22px_rgba(41,38,35,0.10)] transition-all duration-300 hover:-translate-y-px hover:bg-taupe hover:text-ink disabled:pointer-events-none disabled:opacity-70 md:h-14 md:w-14"
                type="button"
                aria-label="Ver siguiente paso"
                onClick={showNextStep}
                disabled={phase !== "idle"}
              >
                <ArrowRight aria-hidden="true" size={18} strokeWidth={1.6} />
              </button>
            </div>
          </article>
          <div className="mt-7 flex items-center justify-center gap-3">
            {steps.map((step, index) => (
              <button
                className={`focus-ring h-3 rounded-full transition-all duration-300 ${
                  activeStep === index
                    ? "w-12 bg-ink"
                    : "w-8 bg-taupe/70 hover:bg-accent/70"
                }`}
                type="button"
                aria-label={`Ver paso ${step.title}`}
                aria-current={activeStep === index ? "step" : undefined}
                onClick={() => showStep(index)}
                key={step.title}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
