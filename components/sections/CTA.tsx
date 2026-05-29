import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import { site, waLink, waMessages } from "@/lib/site";

export function CTA() {
  return (
    <section
      id="urgencia"
      className="bg-brand-black px-5 py-16 text-center sm:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-[clamp(2.6rem,7vw,4.9rem)] uppercase leading-[0.95] text-white">
          ¿Tu auto no arranca
          <span className="block text-brand-orange">ahora mismo?</span>
        </h2>
        <p className="mt-3 text-base text-white/65">
          Escribinos y en minutos coordinamos. Llegamos a donde estés, los 7
          días de la semana.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild variant="whatsapp" size="xl">
            <a
              href={waLink(waMessages.domicilio)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="size-5" />
              WhatsApp ahora
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="xl"
            className="border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <a href={`tel:${site.phoneTel}`}>
              <Phone className="size-5" /> {site.phoneDisplay}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
