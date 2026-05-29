"use client";

import * as React from "react";
import { X } from "lucide-react";

import { WhatsAppIcon } from "@/components/icons";
import { waLink, waMessages } from "@/lib/site";
import { cn } from "@/lib/utils";

export function WhatsAppFloat() {
  const [open, setOpen] = React.useState(false);
  const [showNotif, setShowNotif] = React.useState(true);

  React.useEffect(() => {
    // Abre el popup automáticamente a los 7s para invitar a la conversación.
    const id = window.setTimeout(() => {
      setOpen((current) => current || true);
    }, 7000);
    return () => window.clearTimeout(id);
  }, []);

  function toggle() {
    setOpen((v) => !v);
    setShowNotif(false);
  }

  return (
    <div className="fixed bottom-5 right-4 z-[999]">
      <div
        className={cn(
          "absolute bottom-[68px] right-0 w-[295px] origin-bottom-right overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300",
          open
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-0 opacity-0",
        )}
      >
        <div className="flex items-center gap-2.5 bg-[#075E54] px-4 py-3">
          <span className="bg-brand-orange flex size-9 items-center justify-center rounded-full text-sm font-extrabold text-white">
            GF
          </span>
          <div className="flex-1">
            <p className="text-sm font-bold text-white">
              Gian Franco · Mar del Litio
            </p>
            <p className="flex items-center gap-1.5 text-[11px] text-white/70">
              <span className="size-1.5 rounded-full bg-[#4AE54A]" />
              En línea ahora
            </p>
          </div>
          <button
            type="button"
            onClick={toggle}
            aria-label="Cerrar chat"
            className="text-white/60 transition-colors hover:text-white"
          >
            <X className="size-4" />
          </button>
        </div>
        <div className="bg-[#ECE5DD] p-4">
          <div className="max-w-[88%] rounded-xl rounded-bl-none bg-white p-3 text-sm leading-relaxed text-neutral-700 shadow-sm">
            ¡Hola! 👋 ¿Para qué vehículo necesitás la batería? Te cotizamos al
            instante 🔋
            <span className="mt-1 block text-right text-[10px] text-muted-foreground">
              ahora
            </span>
          </div>
        </div>
        <div className="p-3">
          <a
            href={waLink(waMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-wa flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-extrabold text-white transition-[filter] hover:brightness-105"
          >
            <WhatsAppIcon className="size-4" />
            Iniciar conversación
          </a>
        </div>
      </div>

      <button
        type="button"
        onClick={toggle}
        aria-label="Abrir chat de WhatsApp"
        className="bg-wa relative flex size-14 items-center justify-center rounded-full text-white shadow-[0_4px_20px_rgba(37,211,102,0.5)] transition-transform hover:scale-110"
      >
        <WhatsAppIcon className="size-7" />
        {showNotif && (
          <span className="bg-brand-orange absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full border-2 border-white text-[9px] font-extrabold">
            1
          </span>
        )}
      </button>
    </div>
  );
}
