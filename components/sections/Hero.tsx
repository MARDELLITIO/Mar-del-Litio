import Image from "next/image";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import { site, waLink, waMessages } from "@/lib/site";

const trust = [
  { num: "+100", label: "Reseñas 5★ en Google" },
  { num: "45′", label: "Tiempo de instalación" },
  { num: "7 días", label: "Incluye fines de semana" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] flex-col justify-center pt-[110px]"
    >
      <Image
        src="/images/hero-bg.png"
        alt="Técnico de Mar del Litio instalando una batería de auto a domicilio en Mar del Plata"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-black/95 via-brand-black/70 to-brand-black/20"
        aria-hidden="true"
      />

      <div className="relative z-[2] mx-auto grid w-full max-w-7xl items-center gap-8 px-5 pb-14 sm:px-8 lg:grid-cols-[1fr_auto] lg:gap-10 lg:px-16">
        <div>
          <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-brand-orange-light">
            <span className="animate-pulse-dot inline-block size-1.5 rounded-full bg-brand-orange-light" />
            Servicio activo en Mar del Plata
          </span>

          <h1 className="font-display text-[clamp(3.4rem,8vw,6.6rem)] uppercase leading-[0.92] tracking-wide text-white">
            Baterías a domicilio
            <span className="block text-brand-orange">en Mar del Plata</span>
          </h1>

          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-neutral-300">
            ¿Tu auto no arranca? Te llevamos la batería nueva{" "}
            <strong className="font-bold text-white">donde estés</strong> y la
            instalamos en el acto, con diagnóstico de carga incluido. En 45
            minutos volvés a la ruta.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild variant="whatsapp" size="xl">
              <a
                href={waLink(waMessages.urgente)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="size-5" />
                Pedir batería ahora
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            >
              <a href={`tel:${site.phoneTel}`}>
                <Phone className="size-5" /> {site.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>

        <div className="w-full max-w-sm rounded-2xl border border-brand-orange/35 bg-brand-black/55 p-5 backdrop-blur-lg lg:w-64">
          <div className="rounded-xl bg-white p-4 shadow-lg">
            <p className="font-display text-5xl leading-none text-brand-orange">
              45<span className="text-[2rem]">′</span>
            </p>
            <p className="mt-1 text-[11px] font-extrabold uppercase tracking-wider text-brand-black">
              Tu batería instalada
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Llegamos a cualquier punto de Mar del Plata
            </p>
          </div>

          <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-white/20 pt-4">
            {trust.map((t) => (
              <div key={t.label}>
                <dt className="font-display text-2xl leading-none text-white">
                  {t.num}
                </dt>
                <dd className="mt-1 text-[10px] leading-tight text-white/65">
                  {t.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
