import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

import {
  WhatsAppIcon,
  InstagramIcon,
  TikTokIcon,
} from "@/components/icons";
import { site, waLink, waMessages } from "@/lib/site";

const navLinks = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#dudas", label: "Preguntas" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#mayorista", label: "Mayoristas" },
  { href: site.maps, label: "Google Maps", external: true },
];

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] px-5 py-10 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div className="font-display text-2xl text-white">
            Mar del <span className="text-brand-orange">Litio</span>
          </div>
          <address className="space-y-1 text-sm not-italic text-white/40 sm:text-right">
            <p className="flex items-center gap-2 sm:justify-end">
              <Phone className="size-3.5" />
              <a href={`tel:${site.phoneTel}`} className="hover:text-brand-orange">
                {site.phoneDisplay}
              </a>
            </p>
            <p className="flex items-center gap-2 sm:justify-end">
              <Mail className="size-3.5" />
              <a
                href={`mailto:${site.email}`}
                className="hover:text-brand-orange"
              >
                {site.email}
              </a>
            </p>
            <p className="flex items-center gap-2 sm:justify-end">
              <MapPin className="size-3.5" />
              {site.address} · {site.city} · {site.region}
            </p>
          </address>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/35 transition-colors hover:text-brand-orange"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/35 transition-colors hover:text-brand-orange"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={waLink(waMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-white/35 transition-colors hover:text-brand-orange"
            >
              <WhatsAppIcon className="size-4" />
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/35 transition-colors hover:text-brand-orange"
            >
              <InstagramIcon className="size-4" />
            </a>
            <a
              href={site.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-white/35 transition-colors hover:text-brand-orange"
            >
              <TikTokIcon className="size-4" />
            </a>
          </div>
        </div>

        <p className="mt-6 text-xs text-white/25">
          © {new Date().getFullYear()} {site.name} · Baterías a domicilio en{" "}
          {site.city}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
