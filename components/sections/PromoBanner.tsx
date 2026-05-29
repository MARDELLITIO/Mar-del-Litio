"use client";

import * as React from "react";
import { X } from "lucide-react";

/** Formatea milisegundos restantes como HH:MM:SS. */
function formatRemaining(ms: number): string {
  const clamped = Math.max(0, ms);
  const h = String(Math.floor(clamped / 3_600_000)).padStart(2, "0");
  const m = String(Math.floor((clamped % 3_600_000) / 60_000)).padStart(2, "0");
  const s = String(Math.floor((clamped % 60_000) / 1000)).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

const PROMO_DURATION = 4 * 60 * 60 * 1000; // 4 horas
const STORAGE_KEY = "mdl_promo_end";

export function PromoBanner({ onClose }: { onClose: () => void }) {
  const [remaining, setRemaining] = React.useState<number | null>(null);

  React.useEffect(() => {
    // El contador arranca recién en el cliente para evitar mismatch de hidratación.
    let end = Number(window.localStorage.getItem(STORAGE_KEY));
    if (!end || Number.isNaN(end) || end < Date.now()) {
      end = Date.now() + PROMO_DURATION;
      window.localStorage.setItem(STORAGE_KEY, String(end));
    }

    const tick = () => setRemaining(end - Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="bg-brand-orange relative z-[1000] flex min-h-10 flex-wrap items-center justify-center gap-x-2.5 gap-y-1 px-12 py-2 text-center text-sm font-bold text-white">
      <span>
        🔥 <strong className="font-extrabold">10% OFF</strong> pagando en
        efectivo
      </span>
      <span className="opacity-60" aria-hidden="true">
        ·
      </span>
      <span>Oferta válida por:</span>
      <span className="min-w-[88px] rounded-md bg-black/25 px-2.5 py-0.5 font-display text-xl tracking-[2px] tabular-nums">
        {remaining === null ? "—" : formatRemaining(remaining)}
      </span>
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar promoción"
        className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 opacity-75 transition-opacity hover:opacity-100"
      >
        <X className="size-4" />
      </button>
    </div>
  );
}
