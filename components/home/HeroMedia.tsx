"use client";

import Image from "next/image";
import { useState } from "react";
import { heroImage, heroMediaType, heroVideo } from "@/config/hero";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function HeroMedia() {
  const reducedMotion = useReducedMotion();
  const [videoFailed, setVideoFailed] = useState(false);
  const shouldUseVideo =
    heroMediaType === "video" && !reducedMotion && !videoFailed;

  if (shouldUseVideo) {
    return (
      <>
        <video
          className="hero-image-enter absolute inset-0 h-full w-full object-cover object-[38%_center] md:object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroVideo.poster}
          onError={() => setVideoFailed(true)}
        >
          {heroVideo.mobileSrc ? (
            <source
              src={heroVideo.mobileSrc}
              media="(max-width: 767px)"
              type="video/mp4"
            />
          ) : null}
          <source src={heroVideo.desktopSrc} type="video/mp4" />
        </video>
        <noscript>
          <FallbackImage />
        </noscript>
      </>
    );
  }

  return <FallbackImage />;
}

function FallbackImage() {
  return (
    <Image
      src={heroImage.src}
      alt={heroImage.alt}
      fill
      className="hero-image-enter object-cover object-[38%_center] md:object-center"
      priority
      sizes="100vw"
    />
  );
}
