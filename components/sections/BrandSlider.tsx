import Image from "next/image";

const brands = [
  { src: "/images/brand-moura.jpeg", alt: "Baterías Moura" },
  { src: "/images/brand-mateo.webp", alt: "Baterías Mateo" },
  { src: "/images/brand-herbo.webp", alt: "Baterías Herbo" },
];

export function BrandSlider() {
  // Se duplica la lista para lograr un loop continuo sin cortes.
  const items = [...brands, ...brands];

  return (
    <section
      aria-label="Marcas de baterías que trabajamos"
      className="overflow-hidden bg-brand-black"
    >
      <div className="marquee-paused animate-marquee flex w-max">
        {items.map((brand, i) => (
          <div
            key={`${brand.alt}-${i}`}
            className="flex h-40 w-72 shrink-0 items-center justify-center bg-white p-8 sm:h-48 sm:w-80"
          >
            <Image
              src={brand.src}
              alt={brand.alt}
              width={240}
              height={140}
              className="max-h-full w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
