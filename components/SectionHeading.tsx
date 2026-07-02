import { Reveal } from "./Reveal";

export function SectionHeading({
  label,
  title,
  intro,
  light = false,
  align = "left",
}: {
  label: string;
  title: string;
  intro?: string;
  light?: boolean;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`section-label ${light ? "text-brick" : "text-brick"}`}>{label}</p>
      <h2
        className={`mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-anthracite"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-white/75" : "text-steel"
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
