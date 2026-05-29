import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";
import { waLink, waMessages } from "@/lib/site";

const steps = [
  {
    num: "1",
    title: "Escribinos o llamanos",
    text: "Decinos la marca y modelo de tu vehículo y tu ubicación. Te cotizamos al instante, sin vueltas.",
  },
  {
    num: "2",
    title: "Salimos para allá",
    text: "Coordinamos y el técnico va directo a donde estés: tu casa, el trabajo o la calle donde quedaste varado.",
  },
  {
    num: "3",
    title: "Instalación incluida",
    text: "Colocamos la batería nueva, probamos la carga del auto en el momento y te dejamos andando. Sin costos ocultos.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="bg-brand-gray px-5 py-16 sm:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tag="Simple y rápido"
          title="Cómo funciona"
          subtitle="Resolver el problema te toma tres pasos y una sola llamada."
        />

        <ol className="mt-9 grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 80} asChild>
              <li className="relative rounded-xl border-2 border-transparent bg-white p-6 shadow-sm transition-colors hover:border-brand-orange">
                <span className="bg-brand-orange flex size-11 items-center justify-center rounded-full font-display text-2xl text-white">
                  {step.num}
                </span>
                <h3 className="mt-4 text-lg font-extrabold text-brand-black">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <div className="mt-9 flex justify-center">
          <Button asChild variant="whatsapp" size="lg">
            <a
              href={waLink(waMessages.domicilio)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="size-5" />
              Coordinar mi batería
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
