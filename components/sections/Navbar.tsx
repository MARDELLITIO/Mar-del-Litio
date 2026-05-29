import Link from "next/link";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import { site, waLink, waMessages } from "@/lib/site";

export function Navbar() {
  return (
    <nav className="flex h-14 items-center justify-between border-b bg-white px-4 shadow-[0_2px_12px_rgba(0,0,0,0.08)] sm:px-5">
      <Link href="#inicio" className="flex items-center gap-2" aria-label={site.name}>
        <span className="bg-brand-orange flex size-8 items-center justify-center rounded-md font-display text-base text-white">
          ML
        </span>
        <span className="text-sm font-bold leading-tight text-brand-black">
          Mar del Litio
          <span className="hidden text-[10px] font-normal text-muted-foreground sm:block">
            Mar del Plata · Baterías
          </span>
        </span>
      </Link>

      <div className="flex items-center gap-2">
        <a
          href={`tel:${site.phoneTel}`}
          className="hidden items-center gap-1.5 text-sm font-bold text-brand-black sm:flex"
        >
          <Phone className="size-3.5" /> {site.phoneDisplay}
        </a>
        <Button asChild variant="whatsapp" size="sm" className="rounded-full">
          <a
            href={waLink(waMessages.domicilio)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp
          </a>
        </Button>
      </div>
    </nav>
  );
}
