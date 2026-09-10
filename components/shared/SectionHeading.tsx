import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className = ""
}: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      <span className="eyebrow-pill mb-4">{eyebrow}</span>
      <h2 className="max-w-4xl text-4xl font-light leading-tight text-ink md:text-5xl lg:text-6xl">
        {title}
      </h2>
    </div>
  );
}
