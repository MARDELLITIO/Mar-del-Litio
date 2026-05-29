import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const brands = [
  { name: "Mateo", desc: "Fabricación nacional · Alta durabilidad" },
  { name: "Moura", desc: "Líder del mercado · Garantía extendida" },
  { name: "Herbo", desc: "Certificada · Distribución nacional" },
];

export function Brands() {
  return (
    <section className="bg-brand-black px-5 py-14 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tag="Stock permanente"
          title="Las mejores marcas"
          tone="dark"
        />

        <div className="mt-9 grid gap-3.5 sm:grid-cols-3">
          {brands.map((brand, i) => (
            <Reveal key={brand.name} delay={i * 70} asChild>
              <article className="rounded-xl border-2 border-white/10 p-6 text-center transition-colors hover:border-brand-orange hover:bg-brand-orange/5">
                <p className="font-display text-3xl text-white">{brand.name}</p>
                <p className="mt-1 text-xs text-white/40">{brand.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
