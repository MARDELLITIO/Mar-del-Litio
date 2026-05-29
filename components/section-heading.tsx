import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  tag: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** `dark` para fondos oscuros, `light` para fondos claros. */
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  tag,
  title,
  subtitle,
  tone = "light",
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto text-center",
        align === "center" && "flex flex-col items-center",
        className,
      )}
    >
      <span className="bg-brand-orange mb-3 inline-block rounded px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[2px] text-white">
        {tag}
      </span>
      <Reveal>
        <h2
          className={cn(
            "font-display text-[clamp(2.1rem,5vw,3.5rem)] uppercase leading-none",
            tone === "dark" ? "text-white" : "text-brand-black",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={60}>
          <p
            className={cn(
              "mt-2.5 max-w-xl text-[15px] leading-relaxed",
              align === "center" && "mx-auto",
              tone === "dark" ? "text-white/50" : "text-muted-foreground",
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
