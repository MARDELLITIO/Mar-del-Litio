import { Zap, ShieldCheck, CalendarDays, Banknote } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

const features = [
  {
    icon: Zap,
    title: "Instalación en 45 minutos",
    text: "Llegamos a donde estés y te dejamos el auto andando. Sin esperas, sin grúas y sin traslados al taller.",
  },
  {
    icon: ShieldCheck,
    title: "Garantía oficial de fábrica",
    text: `Mínimo 12 meses, sin letra chica. La garantía se gestiona en nuestro taller de ${site.address}.`,
  },
  {
    icon: CalendarDays,
    title: "Atención los 7 días",
    text: "Domingos y feriados incluidos. Estamos disponibles justo cuando tu auto te deja a pie.",
  },
  {
    icon: Banknote,
    title: "10% OFF en efectivo",
    text: "Pagando en efectivo te hacemos un 10% de descuento sobre el precio final. Escribinos y aprovechá.",
  },
];

export function Features() {
  return (
    <section id="beneficios" className="bg-white px-5 py-16 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tag="Por qué elegirnos"
          title="Lo que nos diferencia"
          subtitle="Un equipo real de Mar del Plata, resolviendo problemas reales — no un call center."
        />

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={i * 70} asChild>
                <article className="group relative overflow-hidden rounded-xl border-2 p-6 transition-all hover:-translate-y-1 hover:border-brand-orange">
                  <span className="bg-brand-orange/10 text-brand-orange mb-4 flex size-12 items-center justify-center rounded-lg">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="text-base font-extrabold text-brand-black">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.text}
                  </p>
                  <span className="bg-brand-orange absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
