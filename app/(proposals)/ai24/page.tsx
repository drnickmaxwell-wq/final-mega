"use client";
import dynamic from "next/dynamic";
import SeoHomeJsonLd from "@/components/proposals/ai24/SeoHomeJsonLd";
import HeroAurora from "@/components/proposals/ai24/HeroAurora";
import TreatmentsLux from "@/components/proposals/ai24/TreatmentsLux";
import TestimonialsCarousel from "@/components/proposals/ai24/TestimonialsCarousel";

const Header     = dynamic(() => import("@/components/proposals/ai24/HeaderAi24").then(m => m.default ?? (m as any).HeaderAi24), { ssr:false });
const Footer     = dynamic(() => import("@/components/proposals/ai24/FooterAi24").then(m => m.default ?? (m as any).FooterAi24), { ssr:false });
const ActionDock = dynamic(() => import("@/components/layout/ActionDock").then(m => m.default ?? (m as any).ActionDock), { ssr:false });

const Hero       = dynamic(() => import("@/components/hero/HeroVideo").then(m => m.default ?? (m as any).HeroVideo), { ssr:false });
// Keep your generic sections too if you want
const Features   = dynamic(() => import("@/components/sections/FeaturesSection").then(m => m.default ?? (m as any).FeaturesSection), { ssr:false });
const CTASection = dynamic(() => import("@/components/proposals/ai24/CTASectionAi24").then(m => m.default ?? (m as any).CTASectionAi24), { ssr:false });

export default function Page(){
  return (
    <>
      <SeoHomeJsonLd />
      <Header />
      <main className="relative">
        <Hero videoSrc="/videos/hero/coastal-dental-hero.mp4" posterSrc="/videos/hero/hero-poster.jpg" />
        <HeroAurora /> {/* underlay on top of video, behind text */}
      </main>

      {/* Keep features; swap in TreatmentsLux for richer UX */}
      <Features />
      <TreatmentsLux />
      <TestimonialsCarousel />
      <CTASection />

      <Footer />
      <ActionDock />
    </>
  );
}
