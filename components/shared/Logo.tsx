import Link from "next/link";
import { siteConfig } from "@/config/site";

type LogoProps = {
  inverted?: boolean;
  className?: string;
};

export function Logo({ inverted = false, className = "" }: LogoProps) {
  return (
    <Link
      className={`focus-ring inline-flex items-center gap-2 text-2xl font-light tracking-normal md:text-3xl ${className}`}
      href="/"
      aria-label="Ir al inicio de HÁBITAT"
    >
      <span
        aria-hidden="true"
        className={`relative inline-block h-4 w-4 border border-b-0 ${
          inverted ? "border-ivory" : "border-ink"
        } before:absolute before:inset-0 before:top-1/2 before:border-b ${
          inverted ? "before:border-ivory" : "before:border-ink"
        }`}
      />
      {siteConfig.name}
    </Link>
  );
}
