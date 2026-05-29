"use client";

import * as React from "react";
import { Banknote, Truck, BadgeCheck, MessageCircle, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

const perks = [
  {
    icon: Banknote,
    title: "Precio mayorista real",
    text: "Cotización directa desde el primer pedido.",
  },
  {
    icon: Truck,
    title: "Entrega en tu comercio",
    text: "Llevamos el stock hasta tu taller.",
  },
  {
    icon: BadgeCheck,
    title: "Garantía de fábrica",
    text: "Todos los productos con garantía oficial.",
  },
  {
    icon: MessageCircle,
    title: "Atención directa",
    text: "Hablás con Gian Franco. Sin call centers.",
  },
];

const fieldClass =
  "w-full rounded-lg border-2 bg-neutral-50 px-3 py-2.5 text-sm outline-none transition-colors focus:border-brand-orange focus:bg-white";

export function Wholesale() {
  const [sent, setSent] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);
    try {
      await fetch(site.formspree, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
    } finally {
      setSent(true);
      setSubmitting(false);
    }
  }

  return (
    <section
      id="mayorista"
      className="scroll-mt-24 bg-brand-gray px-5 py-16 sm:px-8 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading
            tag="Canal mayorista B2B"
            title="¿Sos taller o revendedor?"
            subtitle="Precios mayoristas directos para talleres, lubricentros y revendedores de Mar del Plata y la zona."
          />
          <div className="mt-7 grid gap-3.5 sm:grid-cols-2">
            {perks.map((perk) => {
              const Icon = perk.icon;
              return (
                <div
                  key={perk.title}
                  className="rounded-lg border-2 bg-white p-4"
                >
                  <span className="text-brand-orange mb-2 flex size-9 items-center justify-center rounded-md bg-brand-orange/10">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-sm font-extrabold text-brand-black">
                    {perk.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {perk.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-2xl border-2 bg-white p-6 sm:p-8">
          {sent ? (
            <div className="py-10 text-center">
              <BadgeCheck className="mx-auto size-12 text-brand-orange" />
              <h3 className="mt-3 text-xl font-extrabold text-brand-black">
                ¡Consulta enviada!
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Gian Franco te contacta en menos de 24 hs.
                <br />
                También podés escribirle al{" "}
                <strong className="text-brand-black">
                  {site.phoneDisplay}
                </strong>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <input
                type="hidden"
                name="_subject"
                value="Nueva consulta mayorista - Mar del Litio"
              />
              <div>
                <h3 className="text-lg font-extrabold text-brand-black">
                  Quiero ser distribuidor
                </h3>
                <p className="text-sm text-muted-foreground">
                  Te contactamos en menos de 24 hs.
                </p>
              </div>

              <div className="grid gap-3.5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1 block text-xs font-bold">Nombre *</span>
                  <input
                    name="nombre"
                    required
                    placeholder="Tu nombre"
                    className={fieldClass}
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-bold">
                    Teléfono *
                  </span>
                  <input
                    name="telefono"
                    type="tel"
                    required
                    placeholder="223 ..."
                    className={fieldClass}
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-1 block text-xs font-bold">Email *</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className={fieldClass}
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-xs font-bold">
                  Nombre del comercio *
                </span>
                <input
                  name="comercio"
                  required
                  placeholder="Nombre del negocio"
                  className={fieldClass}
                />
              </label>

              <div className="grid gap-3.5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1 block text-xs font-bold">
                    Tipo de negocio
                  </span>
                  <select name="tipo_negocio" className={fieldClass}>
                    <option value="">Seleccioná...</option>
                    <option>Taller mecánico</option>
                    <option>Lubricentro</option>
                    <option>Revendedor</option>
                    <option>Otra empresa</option>
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-bold">Ciudad</span>
                  <input
                    name="ciudad"
                    placeholder="Mar del Plata, Tandil..."
                    className={fieldClass}
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-1 block text-xs font-bold">
                  ¿Qué marcas te interesan?
                </span>
                <textarea
                  name="marcas"
                  rows={3}
                  placeholder="Ej: Mateo, Moura... ¿cuántas unidades por mes?"
                  className={`${fieldClass} resize-y`}
                />
              </label>

              <Button
                type="submit"
                variant="brand"
                size="lg"
                className="w-full"
                disabled={submitting}
              >
                <Send className="size-4" />
                {submitting ? "Enviando..." : "Enviar consulta"}
              </Button>
              <p className="text-center text-[11px] text-muted-foreground">
                Sin compromiso. Respondemos en menos de 24 hs hábiles.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
