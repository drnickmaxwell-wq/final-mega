"use client";
import GlowCard from "@/components/fx/GlowCard";
import React from "react";

/** Treatments grid with gold hover tint + CTA reveal. */
export default function TreatmentsLux() {
  const items = [
    { title: "3D Digital Dentistry", href: "/treatments", cta: "Explore 3D Tech" },
    { title: "Porcelain Veneers", href: "/treatments/veneers", cta: "Perfect Your Smile" },
    { title: "Dental Implants", href: "/treatments/implants", cta: "Restore Your Smile" },
  ];
  return (
    <section className="mx-auto max-w-[var(--content)] px-6 py-16">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <article key={it.title} className="relative group">
            {/* Gold overlay on hover */}
            <div className="pointer-events-none absolute inset-0 rounded-[var(--radius)] bg-[var(--gold)]/0 group-hover:bg-[var(--gold)]/12 transition-colors duration-300" />
            <GlowCard className="p-6">
              <h3 className="text-xl font-semibold mb-2">{it.title}</h3>
              <a
                href={it.href}
                className="inline-block mt-2 rounded-full px-4 py-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "var(--magenta)", boxShadow: "var(--glow-magenta)" }}
              >
                {it.cta} →
              </a>
            </GlowCard>
          </article>
        ))}
      </div>
    </section>
  );
}
