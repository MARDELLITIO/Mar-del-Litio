"use client";

import * as React from "react";

import { PromoBanner } from "@/components/sections/PromoBanner";
import { Navbar } from "@/components/sections/Navbar";

/**
 * Orquesta la barra de promoción y el navbar fijos en el tope.
 * Mantiene el estado de "banner abierto" para coordinar el offset superior.
 */
export function SiteHeader() {
  const [bannerOpen, setBannerOpen] = React.useState(true);

  return (
    <header className="fixed inset-x-0 top-0 z-[900]">
      {bannerOpen && <PromoBanner onClose={() => setBannerOpen(false)} />}
      <Navbar />
    </header>
  );
}
