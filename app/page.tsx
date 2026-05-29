import { SiteHeader } from "@/components/sections/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { BrandSlider } from "@/components/sections/BrandSlider";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";
import { Brands } from "@/components/sections/Brands";
import { Stats } from "@/components/sections/Stats";
import { Wholesale } from "@/components/sections/Wholesale";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloat } from "@/components/sections/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <BrandSlider />
        <HowItWorks />
        <Features />
        <Testimonials />
        <FAQ />
        <Brands />
        <Stats />
        <Wholesale />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
