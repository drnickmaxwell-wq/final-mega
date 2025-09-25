"use client";
import dynamic from "next/dynamic";

const Header     = dynamic(() => import("@/components/proposals/ai24/HeaderAi24").then(m => m.default ?? (m as any).HeaderAi24), { ssr:false });
const Footer     = dynamic(() => import("@/components/proposals/ai24/FooterAi24").then(m => m.default ?? (m as any).FooterAi24), { ssr:false });
const ActionDock = dynamic(() => import("@/components/layout/ActionDock").then(m => m.default ?? (m as any).ActionDock), { ssr:false });

const Hero       = dynamic(() => import("@/components/hero/HeroVideo").then(m => m.default ?? (m as any).HeroVideo), { ssr:false });
const Features   = dynamic(() => import("@/components/sections/FeaturesSection").then(m => m.default ?? (m as any).FeaturesSection), { ssr:false });
const Treatments = dynamic(() => import("@/components/sections/TreatmentsSection").then(m => m.default ?? (m as any).TreatmentsSection), { ssr:false });
const CTASection = dynamic(() => import("@/components/proposals/ai24/CTASectionAi24").then(m => m.default ?? (m as any).CTASectionAi24), { ssr:false });

export default function Page(){
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[var(--content)] px-6">
        <Hero videoSrc="/videos/hero/coastal-dental-hero.mp4" posterSrc="/videos/hero/hero-poster.jpg" />
      </main>
      <section className="relative">
        <Features />
        <Treatments />
        <CTASection />
      </section>
      <Footer />
      <ActionDock />
    </>
  );
}
