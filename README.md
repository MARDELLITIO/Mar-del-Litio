# Mar del Litio — Landing

Landing de **Mar del Litio** (baterías de auto a domicilio en Mar del Plata),
migrada de HTML plano a **Next.js (App Router) + TypeScript + Tailwind CSS v4**
con componentes **shadcn/ui**.

## Stack

- Next.js 16 (App Router, React 19)
- TypeScript
- Tailwind CSS v4
- shadcn/ui (Button, Card, Accordion) sobre Radix
- lucide-react (iconos)

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run lint
```

## Estructura

```
app/
  layout.tsx        # fuentes, metadata SEO, JSON-LD (LocalBusiness)
  page.tsx          # ensambla las secciones en orden
  sitemap.ts        # /sitemap.xml
  robots.ts         # /robots.txt
  globals.css       # tema (tokens de marca + variables shadcn)
components/
  sections/         # una sección por archivo (Hero, FAQ, Footer, ...)
  ui/               # componentes shadcn/ui
  icons.tsx         # iconos de marca (WhatsApp, Google, redes)
  reveal.tsx        # animación de entrada al hacer scroll
  section-heading.tsx
lib/
  site.ts           # datos de contacto y configuración centralizada
  utils.ts          # helper cn()
public/images/      # imágenes (hero + marcas)
```

## Configuración

Todos los datos de contacto (teléfono, WhatsApp, dirección, redes, dominio)
viven en [`lib/site.ts`](lib/site.ts). El formulario mayorista envía a Formspree.

## Deploy

Pensado para **Vercel** (`https://www.mardellitio.com`). El dominio se
configura desde el panel de Vercel.
