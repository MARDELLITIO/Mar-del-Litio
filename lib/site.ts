/**
 * Configuración central del sitio.
 * Un solo lugar para teléfono, WhatsApp, dirección y enlaces,
 * así ninguna sección hardcodea estos datos por su cuenta.
 */
export const site = {
  name: "Mar del Litio",
  legalName: "Mar del Litio — Baterías a domicilio",
  tagline: "Baterías a domicilio en Mar del Plata",
  description:
    "Baterías para autos a domicilio en Mar del Plata. Instalación en 45 minutos, garantía oficial de fábrica y 10% OFF pagando en efectivo. Atendemos los 7 días.",
  url: "https://www.mardellitio.com",
  phoneDisplay: "223 672-4444",
  phoneTel: "2236724444",
  whatsapp: "542236724444",
  email: "bateriasmdp2000@gmail.com",
  address: "Ortiz de Zárate 5640",
  city: "Mar del Plata",
  region: "Buenos Aires",
  country: "AR",
  maps: "https://maps.app.goo.gl/mardellitio",
  instagram: "https://www.instagram.com/mardellitio",
  tiktok: "https://www.tiktok.com/@mardellitio",
  formspree: "https://formspree.io/f/mzdylvpa",
  rating: { value: 5.0, count: 100 },
} as const;

/** Arma un link de WhatsApp con un mensaje prellenado. */
export function waLink(text: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

/** Mensajes de WhatsApp reutilizables por contexto. */
export const waMessages = {
  general: "Hola Gian Franco, quiero consultar por una batería.",
  urgente:
    "Hola Gian Franco, mi auto no arranca. Necesito una batería a domicilio ya.",
  domicilio:
    "Hola Gian Franco, mi auto no arranca. Necesito una batería a domicilio.",
} as const;
