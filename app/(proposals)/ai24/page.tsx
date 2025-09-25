"use client";
import dynamic from "next/dynamic";

// SEO (JSON-LD)
import SeoHomeJsonLd from "@/components/proposals/ai24/SeoHomeJsonLd";

// Luxury drop-ins (proposal-only)
import HeroAurora from "@/components/proposals/ai24/HeroAurora";
import TreatmentsLux from "@/components/proposals/ai24/TreatmentsLux";
import TestimonialsCarousel from "@/components/proposals/ai24/TestimonialsCarousel";
import GradientBelt from "@/components/proposals/ai24/GradientBelt";

// Your upgraded shimmer (token-aware)
import ShimmerText from "@/components/fx/ShimmerText";

// Namespaced AI24 chrome (does NOT overwrite Manus/global)
const Header     = dynamic(() => import("@/components/proposals/ai24/HeaderAi24").then(m => m.default ?? (m as any).HeaderAi24), { ssr:false });
const Footer     = dynamic(() => import("@/components/proposals/ai24/FooterAi24").then(m => m.default ?? (m as any).FooterAi24), { ssr:false });

// Shared items (safe)
const ActionDock = dynamic(() => import("@/components/layout/ActionDock").then(m => m.default ?? (m as any).ActionDock), { ssr:false });
const Hero       = dynamic(() => import("@/components/hero/HeroVideo").then(m => m.default ?? (m as any).HeroVideo), { ssr:false });

// Optional: keep your generic Features
const Features   = dynamic(() => import("@/components/sections/FeaturesSection").then(m => m.default ?? (m as any).FeaturesSection), { ssr:false });

// AI24 CTA (namespaced)
const CTASection = dynamic(() => import("@/components/proposals/ai24/CTASectionAi24").then(m => m.default ?? (m as any).CTASectionAi24), { ssr:false });

export default function Page() {
  return (
    <>
      <SeoHomeJsonLd />

      <Header />

      {/* HERO: enforce z-order so aurora is VISIBLE */}
      <main className="relative">
        {/* z-0: video */}
        <Hero
          videoSrc="/videos/hero/coastal-dental-hero.mp4"
          posterSrc="/videos/hero/hero-poster.jpg"
        />

        {/* z-10: aurora + microbubbles */}
        <HeroAurora />

        {/* z-20: darkening overlay (keeps text legible); reduce alpha if you want more pop */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{ background: "linear-gradient(180deg, rgba(0,0,0,.35), rgba(0,0,0,.15))" }}
          aria-hidden
        />
      </main>

      {/* coloured belt + section intro (screenshots look) */}
      <GradientBelt />
      <section className="mx-auto max-w-[var(--content)] px-6">
        <p className="text-sm opacity-80 mb-2">Our Services</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          <ShimmerText shimmerColor="turquoise" soft>Advanced 3D Dentistry</ShimmerText>
          &nbsp;&nbsp;
          <ShimmerText shimmerColor="magenta" soft>AI-Powered Care</ShimmerText>
        </h2>
        <p className="opacity-80 max-w-[70ch]">
          Experience the future of dentistry with cutting-edge 3D technology, AI diagnostics, and luxury coastal comfort.
        </p>
      </section>

      {/* Content: generic features + luxury treatments + testimonials + CTA */}
      <Features />
      <TreatmentsLux />
      <TestimonialsCarousel />
      <CTASection />

      <Footer />
      <ActionDock />
    </>
  );
}
