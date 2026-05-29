import { Reveal } from "@/components/reveal";

const stats = [
  { num: "+100", label: "Reseñas 5★ en Google" },
  { num: "45′", label: "Tiempo promedio de llegada" },
  { num: "10%", label: "OFF pagando en efectivo" },
  { num: "✓", label: "Garantía oficial de fábrica" },
];

export function Stats() {
  return (
    <section className="bg-brand-orange px-5 py-12 sm:px-8 lg:px-16">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 70}
            className="px-4 text-center lg:border-r lg:border-white/25 lg:last:border-r-0"
          >
            <dt className="font-display text-5xl leading-none text-white">
              {stat.num}
            </dt>
            <dd className="mt-1 text-xs font-medium text-white/75">
              {stat.label}
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
