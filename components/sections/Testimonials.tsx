import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GoogleIcon } from "@/components/icons";
import { site } from "@/lib/site";

const reviews = [
  {
    name: "Martín A.",
    date: "Hace 2 semanas",
    text: "El auto no me arrancaba y en menos de una hora ya estaba solucionado. Gian Franco llegó rápido, cambió la batería en el lugar y listo. Excelente servicio y buen precio.",
  },
  {
    name: "Sofía C.",
    date: "Hace 1 mes",
    text: "Súper recomendable. Me quedé sin batería en pleno centro y en 40 minutos estaban. Muy buena atención, me explicaron todo y el precio fue justo. Los vuelvo a llamar sin dudarlo.",
  },
  {
    name: "Roberto L.",
    date: "Hace 3 semanas",
    text: "Compro para mi taller hace meses. Precios mayoristas, buena mercadería y siempre con stock. Lo mejor es que responden rápido por WhatsApp. Totalmente confiable.",
  },
  {
    name: "Valeria G.",
    date: "Hace 2 meses",
    text: "Nunca había contratado servicio a domicilio de batería y quedé encantada. Sin moverme del lugar, sin esperar en un taller. Te explican todo y el precio es muy razonable.",
  },
  {
    name: "Diego M.",
    date: "Hace 1 semana",
    text: "Rápidos, honestos y con buen precio. Me dieron la batería correcta para mi camioneta. Muy contento, los recomiendo a todos en el barrio.",
  },
  {
    name: "Laura F.",
    date: "Hace 1 mes",
    text: "Me quedé sin batería en la playa en plena temporada. Los llamé y vinieron enseguida. Con Gian Franco siempre bien atendida desde el primer momento.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Stars({ className }: { className?: string }) {
  return (
    <div className={className} aria-label="5 de 5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="inline size-3.5 fill-brand-orange text-brand-orange"
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <figure className="w-[300px] shrink-0 rounded-xl border-2 p-5">
      <figcaption className="mb-2.5 flex items-center gap-2.5">
        <span className="bg-brand-orange flex size-9 items-center justify-center rounded-full text-xs font-extrabold text-white">
          {initials(review.name)}
        </span>
        <div>
          <p className="text-sm font-bold text-brand-black">{review.name}</p>
          <p className="text-[11px] text-muted-foreground">{review.date}</p>
        </div>
      </figcaption>
      <Stars className="mb-2" />
      <blockquote className="text-sm leading-relaxed text-neutral-600">
        {review.text}
      </blockquote>
    </figure>
  );
}

export function Testimonials() {
  const items = [...reviews, ...reviews];

  return (
    <section id="resenas" className="bg-white py-16">
      <div className="mx-auto mb-9 flex max-w-7xl flex-col items-start justify-between gap-4 px-5 sm:flex-row sm:items-end sm:px-8 lg:px-16">
        <div>
          <span className="bg-brand-orange mb-3 inline-block rounded px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[2px] text-white">
            Clientes reales
          </span>
          <h2 className="font-display text-[clamp(2.1rem,5vw,3.5rem)] uppercase leading-none text-brand-black">
            Lo que dicen de nosotros
          </h2>
        </div>
        <div className="flex items-center gap-3.5">
          <span className="font-display text-6xl leading-none text-brand-orange">
            {site.rating.value.toFixed(1)}
          </span>
          <div>
            <Stars className="mb-0.5" />
            <p className="text-sm text-muted-foreground">
              +{site.rating.count} reseñas en Google
            </p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="marquee-paused animate-marquee-slow flex w-max gap-4 px-2">
          {items.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
      </div>

      <div className="mt-8 flex justify-center px-5">
        <Button asChild variant="outline" size="lg">
          <a href={site.maps} target="_blank" rel="noopener noreferrer">
            <GoogleIcon className="size-4" />
            Ver todas las reseñas en Google Maps
          </a>
        </Button>
      </div>
    </section>
  );
}
