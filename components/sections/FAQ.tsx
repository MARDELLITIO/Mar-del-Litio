import { SectionHeading } from "@/components/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { site } from "@/lib/site";

export const faqs = [
  {
    q: "¿Se va a perder la memoria del auto?",
    a: "No. Usamos herramientas que mantienen la memoria activa durante el cambio, así que no perdés la configuración del estéreo, el reloj ni la computadora de a bordo.",
  },
  {
    q: "¿Es seguro que vengan a mi domicilio?",
    a: `Sí. El técnico va hasta tu domicilio y coloca una batería nueva con garantía oficial de fábrica. Somos el servicio de baterías a domicilio más elegido de Mar del Plata, con más de ${site.rating.count} reseñas reales de 5 estrellas en Google que lo respaldan.`,
  },
  {
    q: "¿Cómo sé si mi batería necesita cambio?",
    a: "Si el auto tarda en arrancar, la batería tiene más de 2 años o tuviste descargas frecuentes, probablemente sea hora de cambiarla. Te hacemos un diagnóstico de carga sin cargo antes de decidir.",
  },
  {
    q: "¿Qué pasa si la batería falla en garantía?",
    a: `La cambiamos sin costo, siempre que no presente golpes, bornes rotos o signos de mal uso. El servicio de garantía se realiza en nuestro taller de ${site.address}; no hacemos garantía a domicilio.`,
  },
  {
    q: "¿Puedo pagar con tarjeta o transferencia?",
    a: "Sí: efectivo, transferencia y tarjetas. Recordá que pagando en efectivo tenés un 10% de descuento sobre el precio final.",
  },
  {
    q: "¿Llegan a toda Mar del Plata?",
    a: "Sí, llegamos a toda Mar del Plata. Algunas zonas no tienen costo de traslado y en otras aplica una tarifa. Consultanos por tu zona antes de coordinar y te confirmamos.",
  },
];

export function FAQ() {
  return (
    <section id="dudas" className="bg-brand-black px-5 py-16 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          tag="Preguntas frecuentes"
          title="Resolvemos tus dudas"
          subtitle="Las preguntas que más nos hacen antes de llamar."
          tone="dark"
          align="center"
        />

        <Accordion type="single" collapsible className="mt-9 text-white">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-white/10"
            >
              <AccordionTrigger className="text-white hover:text-brand-orange-light">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-white/65">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
